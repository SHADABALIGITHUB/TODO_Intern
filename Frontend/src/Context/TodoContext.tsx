import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axiosInstance from '../utils/AxiosInstance';

export const status = ["completed", "in-progress", "pending"] as const;

export type Status = typeof status[number];
export interface Todo {
  _id: number;
  title: string;
  description: string;
  status: Status;
}


interface TodoContextType {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  fetchTodos: () => Promise<void>;
  addTodo: (title: string, description: string) => Promise<void>;
  updateTodo: (id: number, status:Status) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  getOneTodo: (id: string) =>  Promise<Todo | null>;
}

// Initial context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider Component
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get('/api/v1/tasks');
      setTodos(response.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };
 useEffect(() => {
   fetchTodos(); 
  }, []);

  // Add a new todo
  const addTodo = async (title: string, description: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post('/api/v1/tasks', { title, description });
      setTodos((prev) => [...prev, response.data]);
    } catch (err: any) {
      setError(err.message || 'Failed to add todo');
    } finally {
      setLoading(false);
    }
  };

  // Update a todo
  const updateTodo = async (id: number, status:Status) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/api/v1/tasks/${id}`,{status:status});
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? { ...todo, ...response.data } : todo))
      );
    } catch (err: any) {
      setError(err.message || 'Failed to update todo');
    } finally {
      setLoading(false);
    }
  };

  // Delete a todo
  const deleteTodo = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/api/v1/tasks/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete todo');
    } finally {
      setLoading(false);
    }
  };

  const getOneTodo = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/api/v1/tasks/${id}`);
      return response.data;
   } catch (err: any) {
      setError(err.message || 'Failed to fetch todos');
      return null;
    } finally {
      setLoading(false);
    }
  }


  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        fetchTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        getOneTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Hook to use TodoContext
export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};
