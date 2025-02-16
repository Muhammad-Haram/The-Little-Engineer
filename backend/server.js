import dotenv from 'dotenv';
dotenv.config()
import http from 'http'
import app from './app.js';
import { Server } from 'socket.io';

const port = process.env.PORT || 8080;

const server = http.createServer(app);
const io = new Server(server)

io.on('connection', socket => {
    console.log('socket connection')
    socket.on('event', data => { /* … */ });
    socket.on('disconnect', () => { /* … */ });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})