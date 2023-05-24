const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    categories:{
        type:Array,
        require:true
    },
    tagName:{
        type:String
    }
},{timestamps:true})
const Post = mongoose.model("Post",PostSchema)
module.exports = Post