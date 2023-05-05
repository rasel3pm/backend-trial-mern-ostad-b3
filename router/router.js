const router = require("express").Router();
const createPostRouter = require("./createPost")
const getPostRouter =require("./getPost")
const searchQuery =require("./searchRoute")
const fileUploader =require("./fileUpload")

router.use("/post",createPostRouter)
router.use("/get",getPostRouter)
router.use("/test",searchQuery)
router.use("/file",fileUploader)
module.exports = router;