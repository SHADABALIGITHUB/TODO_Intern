import { createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../utils/AxiosInstance';
interface Todo {
    id: number;
    title: string;
    description:string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}
export const fetchTodos = async () => {
    const response = await axiosInstance.get('/api/v1//tasks');
    console.log(response)
    return response.data;
};
const initialState: TodosState = {
    todos: await fetchTodos(),
    loading: false,
    error: null,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
           state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, title, description, completed } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
                todo.completed = completed;
            }
        },
    },
});

export const selectTodos = (state: { todos: TodosState }) => state.todos;

export default todosSlice.reducer;
