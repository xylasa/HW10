const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController.js")
const multer = require("multer");
const diskStorage = require("../middlewares/multer.js")


router.post("/", MovieController.create);
router.get("/", MovieController.findAll);
router.get("/:id", MovieController.findOne);
router.put("/upload/:id", multer({storage: diskStorage}).single("image"), MovieController.uploadImage);
router.delete("/:id", ProductController.destroy)


module.exports = router;