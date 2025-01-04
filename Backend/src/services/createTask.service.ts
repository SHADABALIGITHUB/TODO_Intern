import { Task, ITask } from "../models/Task.model";

export const createTask = async (title: string, description: string): Promise<ITask> => {
    const newTask = new Task({ title, description });
    return await newTask.save();
};