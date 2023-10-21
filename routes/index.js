const express = require("express")
const router = express.Router();
const userRouter = require("./user.js")
const movieRouter = require("./movie.js")


router.use("/users", userRouter);
router.use("/movie", movieRouter);


module.exports = router;