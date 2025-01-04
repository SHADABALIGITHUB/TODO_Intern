import express from 'express';
import {Port} from "./config/environment";
import mongoConnection from "./config/mongoConnection";


const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));

// Routes
app.get('/api/v1',()=>{
    console.log('Welcome to Todo App')
} );

// Start server
app.listen(Port, async () => {
    await mongoConnection()
    console.log(`Server running on http://localhost:${Port}`);
});
