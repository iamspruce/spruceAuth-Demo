// STEP 1: import the auth controller we just created
const { login } = require("../controllers/auth");

const express = require("express");
const router = express.Router();

// STEP 2: Use the login controller when we hit the route http://api/users/login
router.get("/login", login);

module.exports = router;
