import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import app from './app.js';
import { Server } from 'socket.io';

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});

io.on('connection', socket => {
    console.log('Socket connection established');
    socket.on('event', data => { /* handle event */ });
    socket.on('disconnect', () => { /* handle disconnect */ });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
