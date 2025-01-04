import { Task } from "../models/Task.model";

export const getAllTasks = async () => {
    return await Task.find();
};