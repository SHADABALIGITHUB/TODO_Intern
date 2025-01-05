import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Checkbox,
    IconButton,
    Pagination,
  } from "@mui/material";
import {RadioButtonUncheckedOutlined, CheckCircle, Delete as DeleteIcon,EditCalendar,OpenInNew } from "@mui/icons-material";
import EmptyPage from "./EmptyPage";
import { Todo,useTodos } from "../Context/TodoContext";
import { useNavigate } from "react-router-dom";
interface ShowListProps {
    list: Todo[];
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    
}
import Dialog from "./Dialog";


const ShowList:React.FC<ShowListProps>= ({list,totalPages,currentPage,setCurrentPage}) => {
     const {deleteTodo} = useTodos();
     const {updateTodo} = useTodos();
     const [openDialog, setOpenDialog] = React.useState(false);
     const [tempTodo, setTempTodo] = React.useState<Todo | null>(null);
     const navigate = useNavigate();

     const openTask=(id:number)=>{
         navigate(`/task/${id}`);
     }

     const openEditDialog = (todo:Todo) => {
        setOpenDialog(true);
        setTempTodo(todo);

      }
   
    return (
        <>
        {tempTodo && <Dialog open={openDialog} todo={tempTodo} action={updateTodo} Close={setOpenDialog} />}
        {list.length!==0?list.map((todo) => (
            <Card key={todo._id} sx={{ margin: 3 }} className="bg-white cursor-pointer dark:bg-black  text-black dark:text-white">
              <CardContent >
                <Typography variant="h6" component="h6">
                  <Checkbox
                    className="text-black dark:text-white"
                    icon={<RadioButtonUncheckedOutlined />}
                    checkedIcon={<CheckCircle />}
                    color={todo.status === "completed" ? "success" : todo.status === "pending" ? "warning" : "info"}
                    checked={true}
                    readOnly
                  />
                  {todo.title}
                  <IconButton style={{ float: "right" }} onClick={() =>{openTask(todo._id)}}>
                    <OpenInNew color="info" />
                  </IconButton>
                  <IconButton style={{ float: "right" }} onClick={() =>{deleteTodo(todo._id)}}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton style={{ float: "right" }} onClick={() =>{openEditDialog(todo)}}>
                    <EditCalendar color="warning" />
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          )):<EmptyPage/>}
         {list.length > 4 &&
           <Pagination
                  count={totalPages} // Total number of pages
                  page={currentPage} // Current page
                  onChange={(_, page) => setCurrentPage(page)} // Handle page change
                  color="primary" // Customize color
            />}
            </>
          
    );

}

export default ShowList;