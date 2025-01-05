import React, { useState } from 'react';

const CreateNewTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { title, description, status };
    console.log('Task Created:', newTask);
    setTitle('');
    setDescription('');
    setStatus('pending');
  };

  return (
    <div className="bg-white max-w-md dark:bg-black text-black dark:text-white">
      <div className="w-full p-6 rounded shadow-md">
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
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
