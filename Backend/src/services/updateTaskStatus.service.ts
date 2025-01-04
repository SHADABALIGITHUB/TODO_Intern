import { Task } from "../models/Task.model";

export const updateTaskStatus = async (id: string, status: 'pending' | 'in-progress' | 'completed') => {
    return await Task.findByIdAndUpdate(id, { status }, { new: true });
};
