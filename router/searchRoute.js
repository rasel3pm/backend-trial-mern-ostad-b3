const router = require("express").Router()
const PostCreate =require("../model/createPostModel")
const multer = require("multer")

//set data on header
router.get("/get", (req,res)=>{
    res.append("name","rasel")
    res.status(200).json({msg:"success"}).end("hellow world")


})
//set cookie
// router.get("/", (req,res)=>{
//     res.cookie('name','rasel')
//     res.cookie('age','20')
//     res.end("hellow")
// })
// router.get("/clearCookie", (req,res)=>{
//     res.clearCookie('name')
//     res.clearCookie('age')
//     res.end("hellow")
// })

// router.get("/query", (req,res)=>{
//     const firstName = req.header('firstName')
//     const lastName = req.header('lastName')
//
//     res.end(firstName + " "+ lastName)
// })

router.post("/post",(req,res)=>{
    // const name = req.header('name')
    // const password =req.header('password')
    // res.send("name :" + name + "Password : "+ password)

    const jsonData = req.body
    res.send(JSON.stringify(jsonData))
})

//file upload with multer
// router.post("/upload",(req,res)=>{
//    const storage=  multer.diskStorage({
//         destination:function (res,file,cb){
//             cb(null,"./uploads")
//         },
//         filename:function (res,file,cb){
//             cb(null,file.originalname)
//         }
//    })
//     const upload = multer({storage:storage}).single("myfile")
//
//     upload(req,res,function (err){
//         if(err){
//             res.send("file not upload")
//         }else {
//             res.send("file upload success")
//         }
//     })
//
//
// })




module.exports = router