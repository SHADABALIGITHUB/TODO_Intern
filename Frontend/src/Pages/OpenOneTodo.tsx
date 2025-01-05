import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Todo} from "../Context/TodoContext";
const OpenOneTodo:React.FC = () => {
    
    const { id } = useParams<{ id: string }>();
    const [todo, setTodo] = useState<Todo | null>(null);
    const [loading, setLoading] = useState(true);
    

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!todo) {
        return <div>Todo not found</div>;
    }
    
    return (
        <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        </div>
    );
    }

export default OpenOneTodo;