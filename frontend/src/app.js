const ReconnectingWebSocket = require('reconnecting-websocket');

console.log('yay');

const socket = new ReconnectingWebSocket(
  "ws://" + window.location.host + "/chat/",
  null,
  {
    reconnectInterval: 500
  }
);

socket.onmessage = function(e) {
    //alert(e.data);
    console.log('websocket message!', e.data);
}
socket.onopen = function() {
    console.log('OPENED!!');
    socket.send("hello world");
}

socket.onclose = function() {
    console.log('CLOSED!!');
}

// Call onopen directly if socket is already open
if (socket.readyState == WebSocket.OPEN) socket.onopen();