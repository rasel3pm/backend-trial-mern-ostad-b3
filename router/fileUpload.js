const router = require("express").Router()
const multer = require("multer")
const crypto = require("crypto")
const path = require("path")

//file upload with multer
router.post("/upload",(req,res)=>{
    const storage = multer.diskStorage({
        destination:(res,file,callback)=>{
            callback(null,"./uploads")
        },
        //file name set way one
        // filename:(res,file,callback)=>{
        //     callback(null,file.originalname)
        // }

        //file name set way two
        filename:(res,file,cb)=>{
            crypto.randomBytes(5,(err,buff)=>{
                if(err){
                    return cb(err)
                }
                const fileExt = path.extname(file.originalname)
                const randomName = buff.toString("hex")+ fileExt
                cb(null,randomName)
            })
        }
    })

    const uploader =multer({storage:storage}).array("myFile",5)

    uploader(req,res,(err)=>{
        if(err){
            res.status(201).json({msg:"File not upload"})
            res.end()
        }else {
            res.status(200).json({msg:"File upload successfully"})
            res.end()
        }
    })
})
module.exports = router