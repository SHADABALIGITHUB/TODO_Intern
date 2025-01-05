import express from 'express';
import {Port} from "./config/environment";
import mongoConnection from "./config/mongoConnection";
import router from './routes/task.route';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/v1',router)

// Start server
app.listen(Port, async () => {
    await mongoConnection()
    console.log(`Server running on http://localhost:${Port}`);
});
