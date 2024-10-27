import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },

    complete: {
        type: Boolean,
        default: false,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    subTodods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo',
        }
    ] //An Array of sub-todos

}, {timestamps: true}) 

export const todo = mongoose.model('Todo', todoSchema)

