const express = require("express");
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require("../controller/Cart");

const router = express.Router();

// /products is already in base
router.post('/', addToCart)
      .get('/', fetchCartByUser)
      .delete('/:id', deleteFromCart)
      .patch('/:id', updateCart)

exports.router = router;
