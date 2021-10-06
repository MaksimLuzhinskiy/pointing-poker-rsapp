import { io } from 'socket.io-client';

export let isConnect = false;

const socket = io('https://pointing-poker-rsapp.herokuapp.com');
socket.on('connect', () => {
  isConnect = socket.connected;
});

export default socket;
