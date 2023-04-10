const express = require('express');

const router = express.Router();
const productsRoutes = require('./../controller/products');

router.get('/', productsRoutes.getProducts);
router.get('/products/:category', productsRoutes.getProductsByCategory);
router.post('/addProduct', productsRoutes.addProduct);
router.get('/:id', productsRoutes.getProductById);

module.exports = router;