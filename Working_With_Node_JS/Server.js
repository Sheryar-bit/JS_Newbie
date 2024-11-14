//Making a local Web Server using NODEJS
const { log } = require("console")
const fs = require("fs")
const os = require("os")

const user = os.userInfo()
console.log(user)
console.log(user.username);


//Making a file in Node.js
fs.writeFile('Greetings.txt', 'Hi ' + user.username + '!', function(err) {
    if(err) {
     console.log(err);
    } else {
    console.log('File appended successfully');
    }
});

console.log(fs)









// const http = require('http');
// const data = {age:5}
// const server = http.createServer(function(req, res) {
//     console.log('server started');
//     res.setHeader('dummy', 'dummyvalue')
//     res.end(JSON.stringify(data))
//     res.setHeader()
// })

// //it binds with the port:
// server.listen(8080)