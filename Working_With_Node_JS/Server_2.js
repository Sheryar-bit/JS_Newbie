const express = require('express')
const app = express()
const db2 = require('./db2')
const cors = require ('cors')
require('dotenv').config();

//Import Router files
const PersonRoutes = require('./Routes/PersonRoutes');
const MenuItemRoutes = require('./Routes/MenuItemRoutes');


app.use(cors({ origin: 'http://127.0.0.1:5500' })); // Allow requests from your frontend, "http://127.0.0.1:5500" = front end port

//Middleware function:

const logReq = function(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`)
    next(); //Moves on next phase
}
app.use(logReq)
app.get('/', logReq ,function(req, res) {
    res.send('welcome to BBQ TONIGHT')
})


const bodyParser = require('body-parser')
app.use(bodyParser.json())   //req.body

const person = require('./models/person')
const MenuItem = require('./models/MenuItem')



//use the router
app.use('/person', PersonRoutes)
app.use('/menuitem', MenuItemRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Server is running on port 3000')
})