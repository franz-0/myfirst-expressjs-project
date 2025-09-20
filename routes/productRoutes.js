const express = require('express');
const Product = require('../models/products.js');
const router = express.Router();
const {
    getProduct, getProducts, createProduct, updateProduct, deleteProduct
} = require('../controller/productController.js');


//routes to getProducts
router.get('/', getProducts)

//routes to createProduct
router.post('/', createProduct)

//routes to getProduct
router.get('/:id', getProduct)

//routes to updateProduct
router.put('/:id', updateProduct)

//routes to deleteProduct
router.delete('/:id', deleteProduct)


module.exports = router;