const router = require("express").Router();
const createPostRouter = require("./createPost")
const getPostRouter =require("./getPost")
const updatePost =require("./updatePost")
const findPostById =require("./findPostById")
const deletePostById =require("./deletePostById")
const searchQuery =require("./searchRoute")
const fileUploader =require("./fileUpload")
const taskManager = require("./taskRoute")

router.use("/",createPostRouter)
router.use("/",getPostRouter)
router.use("/",updatePost)
router.use("/get",findPostById)
router.use("/",deletePostById)
router.use("/test",searchQuery)
router.use("/file",fileUploader)
router.use(taskManager)
module.exports = router;