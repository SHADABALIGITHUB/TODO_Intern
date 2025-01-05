import {
    Card,
    CardContent,
    Typography,
    Checkbox,
    IconButton,
    Pagination,
  } from "@mui/material";
import {RadioButtonUncheckedOutlined, CheckCircle, Delete as DeleteIcon } from "@mui/icons-material";
import EmptyPage from "./EmptyPage";

interface Todo {
    id: number;
    title: string;
    description:string;
    completed: boolean;
}
interface ShowListProps {
    list: Todo[];
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const ShowList:React.FC<ShowListProps>= ({list,totalPages,currentPage,setCurrentPage}) => {
    return (
        <>
        {list.length!==0?list.map((todo) => (
            <Card key={todo.id} sx={{ margin: 3 }} className="bg-white dark:bg-black  text-black dark:text-white">
              <CardContent >
                <Typography variant="h6" component="h6">
                  <Checkbox
                    className="text-black dark:text-white"
                    icon={<RadioButtonUncheckedOutlined />}
                    checkedIcon={<CheckCircle />}
                    color="primary"
                  />
                  {todo.title}
                  <IconButton style={{ float: "right" }}>
                    <DeleteIcon color="error" />
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