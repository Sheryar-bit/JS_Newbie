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
    console.log("MONGODB CONNE TION ERROR: ", err);
})





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