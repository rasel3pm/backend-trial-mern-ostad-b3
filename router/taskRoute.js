const router = require("express").Router();
const TaskModel = require("../model/taskModel")

router.post("/create-task",async (req,res)=>{
    try{
        const {task,description,author}=req.body
        const post =await new TaskModel({
            task,
            description,
            author
        })
        const data =await post.save()
        res.status(200).json({message:"post create success",data})
        res.end()

    }catch (err) {
        res.status(404).json({error:"Something went wrong",err})
    }
})
module.exports = router;