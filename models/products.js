const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        brand: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: false 
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: false
        },
        rating: {
            type: Number,
            required: false
        }
    },
    {
        timestamps: true

    }
);

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;