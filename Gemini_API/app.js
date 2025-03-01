const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()
const express = require("express");
const bodypareser = require('body-parser');
const app = express();

app.use(express.json())
app.use(bodypareser.json())

app.get('/', function(req, res) {
    res.send('Hello World! gemini')
    res.json(data)
})

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works";

const generate = async function (prompt) {
    try{
    const result = await model.generateContent(prompt);
    console.log(result.response.text());    
    }catch(err) {
        console.log("error", err);
        
    }
}
//generate();

app.use('/api/content', async function(req, res) {
    try{
        const data = req.body.question;
        const result = await generate(data)
        res.send(
            {
                "result": result
            }
        )
    }catch(err){
        console.log("Error",err);
    }
})

const PORT = 3000
app.listen(PORT, function() {
    console.log('Server is running on port 3000');
})