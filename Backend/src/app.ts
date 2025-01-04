import express from 'express';
import {Port} from "./config/environment";
import mongoConnection from "./config/mongoConnection";
import router from './routes/task.route';

const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));

// Routes
app.use('/api/v1',router)

// Start server
app.listen(Port, async () => {
    await mongoConnection()
    console.log(`Server running on http://localhost:${Port}`);
});
