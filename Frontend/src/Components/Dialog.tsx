import { Close as MuiClose } from "@mui/icons-material";
import { Button, Dialog as MuiDialog, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { SetStateAction } from "react";
import { Todo,Status } from "../Context/TodoContext";
import { enqueueSnackbar } from "notistack";

interface DialogProps {
    open: boolean;
    todo: Todo;
    action: (id: number,status:Status) => void;
    Close: React.Dispatch<SetStateAction<boolean>>;
}
const Dialog: React.FC<DialogProps> = ({open,todo,action,Close}) => {

    const [selectedStatus, setSelectedStatus] = React.useState<Status>(todo.status);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value==="completed" ||event.target.value=== "pending" ||event.target.value==="in-progress")
    setSelectedStatus(event.target.value);
  };

//  "completed" | "in-progress" | "pending"
    const handleStatusToggle = () => {
         console.log("At toogle final call",selectedStatus);
         action(todo._id,selectedStatus);
         enqueueSnackbar("Task Updated",{variant:"success",autoHideDuration:2000});
      };

    return (
        <MuiDialog open={open} className="relative bg-white dark:bg-black text-black dark:text-white">
            <div className="flex flex-col p-4 md:w-96 m-2">
            <Typography variant="h6" className="text-black">Title:{todo.title}</Typography>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Task Status:{todo.status}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={selectedStatus}
                    defaultValue={todo.status}
                    name="radio-buttons-group"
                    onChange={handleStatusChange}
                >
                    <FormControlLabel value="completed"control={<Radio />} label="Completed" />
                    <FormControlLabel value="pending" control={<Radio />} label="Pending" />
                    <FormControlLabel value="in-progress" control={<Radio />} label="In-progress" />
                </RadioGroup>
            </FormControl>

            <Button onClick={handleStatusToggle} className="bg-blue-500 text-white">Update</Button>
            <MuiClose onClick={()=>Close(false)} className="absolute right-2 h-4 w-4 cursor-pointer" />
            </div>
        </MuiDialog>
    );
};
export default Dialog;