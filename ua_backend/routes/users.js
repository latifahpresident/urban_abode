const express = require('express');

const router = express.Router();
const userRouter = require('./../controller/users');

router.get('/all', userRouter.getUsers);
router.post('/newUser', userRouter.addUser);
router.get('/:id', userRouter.getUser);
router.post('/add_to_cart', userRouter.addToCart);

module.exports = router;