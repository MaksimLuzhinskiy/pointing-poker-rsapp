import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
const http = createServer(app);
const io = new Server(http);

io.on('connection', async (socket: Socket) => {
  socket.on('message', (msg: any) => {
    socket.emit('message', msg);
  });
});

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});
