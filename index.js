
const io = require('socket.io')(3006);



io.on('connection', function (socket) {
  console.log("connected ", socket.username)
  socket.on('adduser', function (username, roomname, chatstatus) {
    var ss = '';
    var dd = ''
    console.log(username, roomname);
    socket.username = username;
    socket.nickename = username;
    socket.join(roomname);
      var msgobj = {
        message: username + ' logged in',
        uname: '',
        unumber: username,
        date: new Date(),
        gname: roomname,
        status: true,
        chatType:false
      }
      var clients = io.sockets.adapter.rooms[roomname].sockets;
      var numClients = (typeof clients !== 'undefined') ? Object.keys(clients).length : 0;
      let chatUsers = [];
      for (var clientId in clients ) {
      
           //this is the socket of each client in the room.
           var clientSocket = io.sockets.connected[clientId];
            console.log("clientSocket",clientSocket.username)
            
              console.log("inside we:",clientSocket.username,username)
              var userObj = {
                message: clientSocket.username + ' logged in',
                uname: clientSocket.username,
                gname: roomname,
                status: true,
                chatType:false
              }
              io.to(roomname).emit('new message', userObj);
      }
  });


  socket.on('sendmessage', function (msgobj) {
    console.log('send msg ', JSON.stringify(msgobj))
    var roomname = msgobj.gname;
    io.to(roomname).emit('new message', msgobj);
  });

  socket.on('disconnect', function () {
    console.log("dis user ", socket.username)
    if (socket.username != undefined) {
      var ss = ''
      var dd = ''
      try {
            let msgobj = {
              message: socket.username + ' is logged out',
              uname: socket.username,
              unumber: socket.username,
              date: new Date(),
              status: false,
              chatType:false,
            }
            console.log("user logut ", msgobj)
            io.to('create').emit('new message', msgobj);
      } catch (e) {
        console.log(e)
      }

      
    }
  });
});
