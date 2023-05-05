const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
})
const Post = mongoose.model("Post",PostSchema)
module.exports = Post