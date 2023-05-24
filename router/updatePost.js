const router = require("express").Router()
const Post = require("../model/createPostModel")

router.patch("/:id",async (req,res)=>{
    try{
        const postId = req.params.id
        const updatePost =await Post.findByIdAndUpdate({_id:postId},{$set:req.body},{new:true})

        await updatePost.save()
            res.status(200).json({message:"Success update post",updatePost})

    }catch (err){
        res.status(404).json({error: "Failed to update post by id---",err})
    }
})



module.exports=router