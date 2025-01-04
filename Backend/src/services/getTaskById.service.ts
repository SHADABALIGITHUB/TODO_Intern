import { Task } from "../models/Task.model";

export const getTaskById = async (id: string) => {
    return await Task.findById(id);
};