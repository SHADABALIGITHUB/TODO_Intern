import React,{useState} from "react";
import { useTodos } from "../Context/TodoContext";
import Loader from "../Components/Loader";
import ShowList from "../Components/ShowList";

const Home: React.FC = () => {

  const {todos, loading, error} = useTodos();
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  
  const startIndex = (currentPage - 1) * tasksPerPage;
  const paginatedTasks = todos.slice(startIndex, startIndex + tasksPerPage);
  const totalPages = Math.ceil(todos.length / tasksPerPage);
 

  if (loading || error) {
    return <Loader />;
  }

  return (
     <ShowList list={paginatedTasks} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
  );
}

export default Home;