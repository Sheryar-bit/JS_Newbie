const mongoose = require('mongoose')


//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//Establishing connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true, //Tells the URL is new
    useUnifiedTopology: true 
    })

    //Get the default connection
    const db2 = mongoose.connection;

    //definr eventlistener for database connection
    db2.on('connected', function() {
     console.log('Connected to MongoDB')
     })
    
     db2.on('Disconnected', function() {
     console.log('Disconnected to MongoDB')
     })

    db2.on('cerror', function() {
     console.log('Error')
    })

    module.exports = db2;