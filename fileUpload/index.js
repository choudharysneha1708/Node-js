const express = require('express');
const multer = require ('multer');
const app = express();

// here upload is middle ware
const upload = multer ({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "uploads")
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname+ "-"+ Date.now()+ ".jpg")
        }
    })
}).single("user_file");
app.post("/upload", upload, (req, resp)=>{
    console.log("abc");
    resp.send("file uploaded")
});


app.listen(5100);