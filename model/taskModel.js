const mongoose = require("mongoose")
const taskModel = mongoose.Schema({
    task:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
},{timestamps:true})
const Task = mongoose.model("Task",taskModel)
module.exports = Task