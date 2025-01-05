import React, { useState } from 'react';
import { useTodos } from '../Context/TodoContext';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateNewTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTodo } = useTodos();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();  
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await addTodo(title, description);
    setTitle('');
    setDescription('');
    enqueueSnackbar('Task created successfully!', {variant: 'success',autoHideDuration: 2000});
    navigate('/');
  };

  return (
    <div className="w-full bg-inherit h-full flex items-center justify-center">
      <div className="w-full max-w-md border dark:border-black p-6 rounded shadow-md dark:bg-black text-black dark:text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border rounded dark:bg-zinc-900 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 border min-h-10 max-h-72 rounded dark:bg-zinc-900 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
