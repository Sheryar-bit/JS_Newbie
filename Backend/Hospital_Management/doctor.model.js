import mongoose from "mongoose";

const hopitalsHours = new mongoose.Schema({
    hospitalName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },

    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },

    time: {
        type: TimeRanges,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true   
    },

    qualifications: {
        type: String,
        required: true
    },

    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospitals"
        },
    ],
    
    hospitalHours: {
         type: [hopitalsHours],
         required: true
    }

},{timestamps: true})

export const Doctor = mongoose.model("DoctorRecord", DoctorSchema)