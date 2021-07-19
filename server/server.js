const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: ["https://vcmobile.com.br", "http://localhost:4200"], // Allow to frontend access and receive events from here
    
    credentials: true
  }
});
const path = require('path');

app.use(cors({credentials: true, origin: true}));
app.use('/static', express.static('public'));

app.get('/**', (req, res) => {
  return res.sendFile(path.join(__dirname + '/public/index.html'));
});

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit('user-connected', userId);

    socket.on('disconnect', () => {
      socket.broadcast.to(roomId).emit('user-disconnected', userId);
    });
  });
});

server.listen(3000);