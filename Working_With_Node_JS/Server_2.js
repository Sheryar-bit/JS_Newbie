const express = require('express')
const app = express()
const db2 = require('./db2')
const cors = require ('cors')

app.use(cors({ origin: 'http://127.0.0.1:5500' })); // Allow requests from your frontend, "http://127.0.0.1:5500" = front end port


const bodyParser = require('body-parser')
app.use(bodyParser.json())   //req.body

const person = require('./models/person')
const MenuItem = require('./models/MenuItem')

app.get('/', function(req, res) {
    res.send('welcome to BBQ TONIGHT')
})

//Import Router files
const PersonRoutes = require('./Routes/PersonRoutes');
const MenuItemRoutes = require('./Routes/MenuItemRoutes');

//use the router
app.use('/person', PersonRoutes)
app.use('/menuitem', MenuItemRoutes)


app.listen(3000, function() {
    console.log('Server is running on port 3000')
})