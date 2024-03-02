const express = require("express");
const { fetchCategories, createCategory } = require("../controller/Category");

const router = express.Router();

// /categories is already in base
router.get("/", fetchCategories).post("/", createCategory);

exports.router = router;
