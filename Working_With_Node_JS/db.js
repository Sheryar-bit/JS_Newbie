const mongoose = require('mongoose');

//Connectig the MongoDB URL
const MongoURL = 'mongodb+srv://alisharyar93:<db_password>@sheryar.goqxc.mongodb.net/?retryWrites=true&w=majority&appName=Sheryar'
mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//Get the default connection
//Mongoose maintains a default connection obj representing the MongoDB obj
const db = mongoose.connection

//Define event listener for database connection
db.on('connection', function() {
    console.log('Connected to MongoDB')
})

db.on('error', function(err) {
    console.log('ERROR', err)
})

db.on('disconnected', function() {
    console.log('MongoDB Disconnected')
})

//Export the DB connection

module.exports = db;