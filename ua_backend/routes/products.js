const express = require('express');

const router = express.Router();
const productsRoutes = require('./../controller/products');

router.get('/', productsRoutes.getProducts);
router.get('/products/', productsRoutes.getProductsByCategory);
router.post('/addProduct', productsRoutes.addProduct)

module.exports = router;