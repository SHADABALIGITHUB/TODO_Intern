import mongoose, { Document,ObjectId } from 'mongoose';

//  model for task
export interface ITask extends Document {
    _id:ObjectId
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
}

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
}, { timestamps: true });

export const Task = mongoose.model<ITask>('Task', TaskSchema);