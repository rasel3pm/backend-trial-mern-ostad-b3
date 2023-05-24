const router = require("express").Router()
const Post = require("../model/createPostModel")

router.delete("/delete-post/:id",async (req,res)=>{
    try {
        const postId = req.params.id
        const postDelete = await Post.findByIdAndDelete({_id:postId})
        if(postDelete){
            res.status(200).json({message:"Success delete post",postDelete})
        }
    }catch (err) {
        console.log(err)
    }
})


module.exports=router