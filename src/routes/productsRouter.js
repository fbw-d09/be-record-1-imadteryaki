const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.route('/:id')
.get(productController.getProductById)
.put(productController.updateProduct)
.delete(productController.deleteProduct);

module.exports = router;
