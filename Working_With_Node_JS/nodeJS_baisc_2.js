//Making a local Web Server using NODEJS
const http = require('http');
const data = {age:5}
const server = http.createServer(function(req, res) {
    console.log('server started');
    res.setHeader('dummy', 'dummyvalue')
    res.end(JSON.stringify(data))
    res.setHeader()
})

//it binds with the port:
server.listen(8080)
