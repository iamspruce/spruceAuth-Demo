// import express
const express = require("express");

// destructure the getIndex controlller from the view controller
const { getIndex } = require("../controllers/view");
const { isLoggedIn } = require("../controllers/auth");

const router = express.Router();

// use the getIndex controller when will hit the route http://localhost:4000/
router.get("/", isLoggedIn, getIndex);

module.exports = router;
