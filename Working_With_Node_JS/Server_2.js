const express = require('express')
const app = express()
const db2 = require('./db2')
const cors = require ('cors')

app.use(cors({ origin: 'http://127.0.0.1:5500' })); // Allow requests from your frontend


const bodyParser = require('body-parser')
app.use(bodyParser.json())   //req.body

const person = require('./models/person')
const MenuItem = require('./models/MenuItem')

app.get('/', function(req, res) {
    res.send('Hello World!')
})


app.post('/MenuItem', async function(req, res) {
   try{
    const menu = req.body;
    //Creaye a new menu document using the mongoose model
    const newMenu = new MenuItem(menu)

    //save the new data to the database
    const savedMenu = await newMenu.save();
    console.log('data saved');
    res.status(200).json(savedMenu);
    
   }

   catch(err){
    console.log(err);
    res.status(500).send({message: 'Error'})
   }
})

app.get('/MenuItem', async function(req, res) {
    try{
        const menu = await MenuItem.find();
        console.log("Data Fetched");
        res.status(200).json(menu)
   }
   catch(err){
    console.log(err);
    res.status(500).send({message: 'Error'})
   }
})

app.post('/person', async function(req, res) {
    
    try{
    const data = req.body   //Assuming that the request body contains the persons data

    //create a new person documet using mongoose model
    const newPerson = new person(data)

    //save the new person to the database
    const savedPerson = await newPerson.save()
    console.log("data saved");
    res.status(200).json(savedPerson) 
}
catch(err) {
    console.log(err);
    res.status(500).json({message: "Error saving data", error: err})
}
})


//get method to get the the person
app.get('/person', async function(req, res) {
    try{
    const data = await person.find()
    console.log("data fetched");
    res.status(200).json(data)
    }
    catch(err){
    console.log(err);
    res.status(500).json({message: "Error saving data", error: err})

    }
})
app.listen(3000, function() {
    console.log('Server is running on port 3000')
})