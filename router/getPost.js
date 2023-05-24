const router = require("express").Router();
const Post = require("../model/createPostModel")
router.get("/posts",async (req,res)=>{
    try {
        const getPost= await Post.find()
        if(getPost){
            res.status(202).json({message:"Success get post",getPost})
        }
    }catch (err){
        res.status(404).json({error: "Failed to get all posts"})
    }
})

module.exports =router;