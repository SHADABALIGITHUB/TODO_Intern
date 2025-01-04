import { Router } from 'express';
import {
    createTaskHandler,
    getAllTasksHandler,
    getTaskByIdHandler,
    updateTaskStatusHandler,
    deleteTaskHandler
} from "../controllers/task.controller"

const router = Router();

//  here is use this 
router.post('/tasks', createTaskHandler);
router.get('/tasks', getAllTasksHandler);
router.get('/tasks/:id', getTaskByIdHandler);
router.put('/tasks/:id', updateTaskStatusHandler);
router.delete('/tasks/:id', deleteTaskHandler);

export default router;