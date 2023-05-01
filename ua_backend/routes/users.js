const express = require('express');

const router = express.Router();
const userRoutes = require('./../controller/users');
const { auth } = require('./../authorization/auth');

router.get('/all', userRoutes.getUsers);
router.post('/newUser', userRoutes.addUser);
router.get('/:id', auth, userRoutes.getUser);
router.post('/add_to_cart', userRoutes.addToCart);
router.get('/cart/:id', userRoutes.getCart);

module.exports = router