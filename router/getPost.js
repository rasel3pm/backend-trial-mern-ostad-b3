const router = require("express").Router();
const Post = require("../model/createPostModel")
router.get("/post",async (req,res)=>{
    try {
        const getPost= await Post.find()
        if(getPost){
            res.status(202).json({message:"success get post",getPost})
        }
    }catch (err){
        res.status(404).json({error: "Product get error"})
    }
})

module.exports =router;