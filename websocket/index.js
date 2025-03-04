const http = require ('http');
const express = require ('express');
const path = require('path')
const websocketerver = require('socket.io');
const { log } = require('console');


const app = express();
const server = http.createServer(app)
const io = websocketerver(server)

app.use(express.json());
app.use(express.static(path.resolve('./public')))


app.get('/', function(req, res) {
    return res.sendFile('/public/index.html')
})

//creting websocket connection:
io.on('connection', function(socket) {
    //console.log('a user connected', socket.id)
    socket.on('user-message', function(message) {
        //console.log("a new user Message:", message)
        io.emit('message', message)
    })
    //console.log('a user connected')
})




const PORT = 8000;
server.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})