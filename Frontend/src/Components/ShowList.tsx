import React from "react";
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Pagination,
    Chip,
    Box as MuiDiv
  } from "@mui/material";
import {Delete as DeleteIcon,EditCalendar,OpenInNew } from "@mui/icons-material";
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
import { enqueueSnackbar } from "notistack";


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
              
                <MuiDiv>
                  
                    <Chip
                    size="small"
                    sx={{ 
                        margin: 1,
                        display: {xs:"flex",sm:"inline-block"},
                      }}
                    label={todo.status}
                    color={todo.status === "completed" ? "success" : todo.status === "pending" ? "warning" : "info"}
                    
                  />
                   
                 <Typography variant="h6" component="h6" sx={{display:{sm:"inline",xs:"none"}}}> {todo.title.charAt(0).toUpperCase() + todo.title.slice(1).toLowerCase()} </Typography>

                  <IconButton sx={{ float:{sm:"right"}}} onClick={() =>{openTask(todo._id)}}>
                    <OpenInNew color="info" />
                  </IconButton>
                  <IconButton sx={{ float:{sm:"right"}}} onClick={() =>{enqueueSnackbar("Task Removed",{variant:"error",autoHideDuration:2000});deleteTodo(todo._id)}}>
                    <DeleteIcon color="error" />
                  </IconButton>
                  <IconButton sx={{ float:{sm:"right"}}} onClick={() =>{openEditDialog(todo)}}>
                    <EditCalendar color="warning" />
                  </IconButton>
                </MuiDiv>
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