//Making a local Web Server using NODEJS
// const { log } = require("console")
// const { json } = require("express")
// const fs = require("fs")
// const os = require("os")

// const user = os.userInfo()
// console.log(user)
// console.log(user.username);


// //Making a file in Node.js
// fs.writeFile('Greetings.txt', 'Hi ' + user.username + '!', function(err) {
//     if(err) {
//      console.log(err);
//     } else {
//     console.log('File appended successfully');
//     }
// });

// console.log(fs)


//converting object to JSON

const Obj = {
    name: 'John',
    age: 25,
    occupation: 'Software Engineer'
}

const Json = JSON.stringify(Obj); //convets the OBJ to JSON format
console.log(Json);


//Creating A Server:
const express = require('express')
const app = express();

//Cretaing Get API
app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/Backend', function(req, res) {
    res.send('Sure we can provide Backend Service!')
})



app.listen(3000, function() {
    console.log("Serever is running on port 3000");
    
})












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