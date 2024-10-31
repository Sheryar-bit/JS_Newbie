import mongoose from "mongoose";

const OrderitemSchema = new mongoose.Schema({
    productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "product" 
    },

    quantity: {
        type: Number,
        required: true
    }
})

const  ordreSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },

    costumer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    Orderitems: { 
        type: [OrderitemSchema],
    },

    address:{
        type: String,
        required:true
    },

    status:{
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "pending"
    }
}, {timestamps: true})