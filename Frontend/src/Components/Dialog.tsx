import { Close as MuiClose } from "@mui/icons-material";
import { Button, Dialog as MuiDialog, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React, { SetStateAction } from "react";
import { Todo } from "../Context/TodoContext";

interface DialogProps {
    open: boolean;
    todo: Todo;
    action: (id: number, updatedData: Partial<Todo>) => void;
    Close: React.Dispatch<SetStateAction<boolean>>;
}
const Dialog: React.FC<DialogProps> = ({open,todo,action,Close}) => {

    const [selectedStatus, setSelectedStatus] = React.useState<"completed"|"pending"|"in-progress">(todo.status);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value==="completed" ||event.target.value=== "pending" ||event.target.value==="in-progress")
    setSelectedStatus(event.target.value);
  };

//  "completed" | "in-progress" | "pending"
    const handleStatusToggle = (event:any) => {
         console.log(todo);
         console.log(event.target.value);
         action(todo._id, { status: selectedStatus })
      };

    return (
        <MuiDialog open={open} className="relative bg-white dark:bg-black text-black dark:text-white">
            <div className="flex flex-col p-4">
            <Typography variant="h6" className="text-black dark:text-white">Title:{todo.title}</Typography>
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
                    <FormControlLabel value="in-process" control={<Radio />} label="In-progress" />
                </RadioGroup>
            </FormControl>

            <Button onClick={handleStatusToggle} className="bg-blue-500 text-white">Update</Button>
            <MuiClose onClick={()=>Close(false)} className="absolute right-2 h-4 w-4 cur " />
            </div>
        </MuiDialog>
    );
};
export default Dialog;