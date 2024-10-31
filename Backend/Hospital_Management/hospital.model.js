import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    Contact: {
        phone: String,
        email: String,
        required: true
    },

    specializedIn: [
        {
        type: String,
        required: true
        }
    ]

},{timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)