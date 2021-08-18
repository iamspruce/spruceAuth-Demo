// STEP 1: import express and cookie parser
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

// STEP 2: import the user route the one we just created
const userRouter = require("./routes/userRoute");
const viewRouter = require("./routes/viewRoute");

const app = express();

// Tell express you are using Pug as your template engine
app.set("view engine", "pug");
// Tell express to look for pug files in the views directory
app.set("views", path.join(__dirname, "views"));
// Tell express to look for our static files in the public directory
app.use(express.static(path.join(__dirname, "public")));

// STEP 3: Use the express body parser and cookieParser we installed earlier
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

//STEP 4: Call the userRoute and viewRoute
app.use("/api/users", userRouter);
app.use("/", viewRouter);

// STEP 5: (optional) when will hit a route not defined throw an error
app.all("*", (req, res, next) => {
  next(console.log(`${req.originalUrl} not found on this server`));
});

module.exports = app;
