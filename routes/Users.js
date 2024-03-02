const express = require("express");
const { fetchUserById, updateUser } = require("../controller/User");
const { checkAuth } = require("../controller/Auth");

const router = express.Router();

// /brands is already in base
router.get("/own", fetchUserById).patch("/:id", updateUser);

exports.router = router;
