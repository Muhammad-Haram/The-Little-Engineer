import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import app from './app.js';
import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import projectModel from './models/project.model.js'

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    }
});

io.use(async (socket, next) => {
    try {

        const token = socket.handshake.auth?.token || socket.handshake.headers.authorization?.split(' ')[1]

        if (!token) {
            return next(new Error('Authentication Error'))
        }

        const projectId = socket.handshake.query.projectId;

        if (!mongoose.Types.ObjectId.isValid(projectId)) {
            return next(new Error('invalid Project'))
        }

        socket.project = await projectModel.findById(projectId)

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return next(new Error('Authentication Error'))
        }

        socket.user = decoded

        console.log(socket)

        console.log('a user connected');

        next();

    } catch (error) {
        next(error);
    }
})

io.on('connection', socket => {
    console.log('Socket connection established');

    socket.roomId = socket.project._id.toString()
    socket.join(socket.roomId);

    socket.on('project-message', data => {
        console.log(data)
        socket.broadcast.to(socket.project._id.emit('project-message', data))
    })

    socket.on('event', data => { /* handle event */ });
    socket.on('disconnect', () => { /* handle disconnect */ });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
