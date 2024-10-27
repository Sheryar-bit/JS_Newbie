//Importing Mongoose: The line import mongoose, { mongo } from "mongoose"; imports the mongoose library so we can use it to define our data structure.
import mongoose, { mongo } from "mongoose";

//Defining a Schema: The line const userSchema = new mongoose.Schema({}) creates a new schema (or structure) for our "User" data. Currently, the schema is empty ({}), meaning there are no specific fields defined yet for the User. Normally, we’d define properties here like name, email, or age to specify what data the User should contain.
//Creating the User Model: The line export const User = mongoose.model("User", userSchema); creates a Mongoose model named User using the userSchema we just defined. This model represents a MongoDB collection where each document will follow the structure of userSchema.
const userSchema = new mongoose.Schema(
    {
        //Add your fields here, for example:
        Username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        Password: {
            type: String,
            required: [true, "Password is required: "],
        },

        Email: {
            type: String,
            required: true
        }
    }, {timestamps: true}
)

//Exporting the Model: Finally, by exporting User, we can use it in other parts of our application to create, read, update, or delete user records in the database.
export const User = mongoose.model("User", userSchema)




//Sources: mongoose