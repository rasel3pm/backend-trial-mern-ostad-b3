const router = require("express").Router();
const Post = require("../model/createPostModel")

router.post("/create-post",async (req,res)=>{
    try{
        const {title,description,author,categories,tagName}=req.body
        const post =await new Post({
            title,
            description,
            author,
            categories,
            tagName
        })
        const data =await post.save()
        res.status(200).json({message:"post create success",data})
        res.end()

    }catch (err) {
        res.status(404).json({error:"Something went wrong",err})
    }
})
module.exports = router;