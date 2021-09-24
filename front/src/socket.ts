import { io } from 'socket.io-client';

const socket = io('https://pointing-poker-rsapp.herokuapp.com');

export default socket;
