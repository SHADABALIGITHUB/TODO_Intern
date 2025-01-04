import { Request, Response } from 'express';
import { createTask } from "../services/createTask.service";
import { getAllTasks } from "../services/getAllTasks.service";
import { getTaskById } from "../services/getTaskById.service";
import { updateTaskStatus } from "../services/updateTaskStatus.service";
import { deleteTask } from "../services/deleteTask.service";


//   use all services here and create a controller based on that here I create all operation in one file
//   for simplicity if you want in separate files easy modifiable

export const createTaskHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            res.status(400).json({ error: 'Title and description are required.' });
            return;
        }
        const newTask = await createTask(title, description);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task.' });
    }
};

export const getAllTasksHandler = async (_req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks.' });
    }
};

export const getTaskByIdHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const task = await getTaskById(id);
        if (!task) {
            res.status(404).json({ error: 'Task not found.' });
            return;
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch task.' });
    }
};

export const updateTaskStatusHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!['pending', 'in-progress', 'completed'].includes(status)) {
            res.status(400).json({ error: 'Invalid status value.' });
            return;
        }
        const updatedTask = await updateTaskStatus(id, status);
        if (!updatedTask) {
            res.status(404).json({ error: 'Task not found.' });
            return;
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task status.' });
    }
};

export const deleteTaskHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedTask = await deleteTask(id);
        if (!deletedTask) {
            res.status(404).json({ error: 'Task not found.' });
            return;
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task.' });
    }
};