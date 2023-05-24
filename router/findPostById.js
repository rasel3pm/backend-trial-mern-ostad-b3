const router = require("express").Router()
const Post = require("../model/createPostModel")


router.get("/:id",async (req,res)=>{
    try{
        const postId = req.params.id
        const findPost = await Post.findById({_id:postId})
        if(findPost){
            res.status(200).json({msg:"find post",findPost})
        }
    }catch (err){
        console.log(err)
    }
})

module.exports=router
