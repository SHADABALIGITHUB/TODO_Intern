import { Task } from "../models/Task.model";

export const deleteTask = async (id: string) => {
    return await Task.findByIdAndDelete(id);
};