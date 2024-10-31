import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        discription: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        productImage: {
            type: String,
        },

        price: {
            type: Number,
            default: 0
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },

        Owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

    }, {timestamps: true})


export const Product = mongoose.model("product", productSchema)