import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
path: "./.env"
})

const PORT = process.env.PORT || 8001;
// app.listen(PORT, function() {
//     console.log(`Server is running on ${PORT}`);
// })

connectDB()
.then(function() {
    console.log(`server is running on ${PORT}`);
})
.catch(function(arr) {
    console.log("MONGODB CONNECTION ERROR: ", err);
})

/*
2. What is process.env?
process.env is an object in Node.js that provides access to environment variables, which are variables that you set outside of the code (typically in a .env file).

Purpose of Environment Variables: They are used to store sensitive information or configuration that can vary between different environments (like development, testing, and production) without hardcoding them in the codebase. Examples include API keys, database URLs, or the server’s port number.
Advantages:
Security: Sensitive information doesn’t appear directly in your code.
Flexibility: You can change configurations for different environments without altering the code. For instance, your database URL for a development environment might be different from production, and environment variables allow you to set each one accordingly.
In the Code:


dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 8001;


dotenv.config(): Loads environment variables from a .env file into process.env.
process.env.PORT: Fetches the value of PORT from the environment. If PORT is not defined, it defaults to 8001.
process.env.MONGODB_URI: Holds the database URI, which is combined with DB_NAME to connect to the MongoDB instance.
Using process.env makes your application more secure, flexible, and easily configurable for different environments.


*/


//Another Approach:
// import express from "express"
// const app = express()

// // using IIFE (Imidiate invoke function)
// ;( async() => {
//     try {
//         // connecting to the database
//        await mongoose.connect(`${process.env.MONGODB_URI}/
//             ${DB_NAME}`)
//             app.on("error", function(error) {
//                 console.log("ERROR", error);
//                 throw error
//             })

//             app.listen(process.env.PORT, function() {
//                 console.log(`Server is running on port
//                      ${process.env.PORT}`);
//             })
//     }
//     catch(error) {
//         console.log('ERROR:', error);
//         throw error;
//     }
// }) ()