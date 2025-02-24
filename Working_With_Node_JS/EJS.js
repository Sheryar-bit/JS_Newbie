const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();


//Basoc ongoDb connetion nothing much
mongoose.connect("mongodb://localhost:27017/hotels", { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("error", err));

//set Up EJS template
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"))
app.use(express.json())

app.get("/", (req, res) => {
    const user = { name: "Sheryar", age: 22 };
    res.render("index", { user }); // Pass data to ejs temp
});

app.listen(3000, function() {
    console.log("Serever is running on port 3000");
    
})
