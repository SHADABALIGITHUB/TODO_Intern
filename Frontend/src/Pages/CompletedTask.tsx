import React, { useState } from 'react';
import ShowList from '../Components/showList';

const CompletedTask: React.FC = () => {
    const [todos] = useState([]);

  return (

    <ShowList list={todos} totalPages={1} currentPage={1} setCurrentPage={() => {}}/>
    
  );
};

export default CompletedTask;
