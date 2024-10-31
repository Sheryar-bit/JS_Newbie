import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    diagnosedWith: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },
    
    age: {
        type: Number,
        required: true
    },

    BloodGroup: {
        type: String,
        enum: ["A-POSITIVE", 
            "B-POSITIVE", 
            "O-POSITIVE",
            "A-NEGATIVE",
            "B-NEGATIVE",
            "O-NEGATIVE"],
            required: true
    },

    Gender: {
        type: String,
        enum: ["MALE", "FEMALE"],
        required: true
    },

    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }
},{timestamps: true})

export const Patient = mongoose.model("Patient", patientSchema)