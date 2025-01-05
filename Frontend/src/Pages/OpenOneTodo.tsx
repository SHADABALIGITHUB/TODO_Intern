import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTodos, Todo } from '../Context/TodoContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { enqueueSnackbar } from 'notistack';

const OpenOneTodo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getOneTodo } = useTodos();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      if (!id) {
        setError('No ID provided.');
        return;
      }

      try {
        const response = await getOneTodo(id); // Use id as a string
        if (response) {
          setTodo(response);
        } else {
          setError('Todo not found.');
        }
      } catch (err) {
        setError('An error occurred while fetching the todo.');
      }
    };

    fetchTodo();
  }, [id, getOneTodo]);

  if (error) {
    return (
      <Box sx={{ minWidth: 275, textAlign: 'center', padding: 4 }} className="dark:bg-black bg-white dark:text-white text-white">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!todo) {
    return (
      <Box sx={{ minWidth: 275, textAlign: 'center', padding: 4 }} className="dark:bg-black bg-white dark:text-white text-white">
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minWidth: 275 }} className="dark:bg-black bg-white dark:text-white text-white">
      <Card variant="outlined" className="dark:bg-black bg-white dark:text-white text-white">
        <CardContent>
          <Typography variant="h5" component="div">
            Title: {todo.title}
          </Typography>
         
          <Typography variant="body2">Description:{todo.description}</Typography>
          <Typography sx={{ mt: 2}}>
            Status: {todo.status}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{enqueueSnackbar("Under work",{variant:"success",autoHideDuration:2000})}}>Want to Change</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default OpenOneTodo;
