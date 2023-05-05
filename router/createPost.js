const router = require("express").Router();
const Post = require("../model/createPostModel")

router.post("/create-post",async (req,res)=>{
    try{
        const {name,email,phone}=req.body
        const post =await new Post({
            name,
            email,
            phone
        })
        const savePost =await post.save()
        res.status(200).json({message:"post create success",savePost})
        res.end()

    }catch (err) {
        res.status(404).json({error:"Something went wrong",err})
    }
})
module.exports = router;