require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.get('/facebook', function(req, res) {
    res.send('Hello Facebook!')
})

app.get("/login", function(req, res) {
    res.send("<h2>Please login! </h2>")
})

app.get('/youtube', function(req, res) {
    res.send('<h1>welcome to YouTube</h2>')
})

app.listen(process.env.port, function() {
    console.log(`Example app listening to a port ${port}`);
    
})