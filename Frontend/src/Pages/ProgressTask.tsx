import React,{useEffect, useState} from "react";
import Loader from "../Components/Loader";
import ShowList from "../Components/ShowList";
import { Todo, useTodos } from "../Context/TodoContext";

const ProgressTask: React.FC = () => {

  const {todos, loading, error} = useTodos();

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  const [progressTodos, setProgressTodos] = useState<Todo[]>([]);
  const startIndex = (currentPage - 1) * tasksPerPage;

 
  useEffect(() => {
    if (todos) {
      const progress = todos.filter((todo) => todo.status === "in-progress");
      setProgressTodos(progress);
    }
  }, [todos]);
  const paginatedTasks = progressTodos.slice(startIndex, startIndex + tasksPerPage);
  const totalPages = Math.ceil(progressTodos.length / tasksPerPage);
  
  if (loading || error) {
    return <Loader />;
  }
  return (
  
       <ShowList list={paginatedTasks} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    
  );
}

export default ProgressTask;