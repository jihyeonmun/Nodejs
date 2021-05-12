const express = require('express');
const router = express.Router();
//=================================
//             Product
//=================================

var storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req,file,cb){
        cb(null, `${Date.now()}_${file.originalName}`)
    }
})

var upload = multer ({storage : storage})

router.post('/image' , (req,res) => {
    // 가져온 이미지를 저장을 해주면 됨.
    upload(req, res, err => {
        if(err) {
            return req.json({success : false, err})
        }
        return res.json({success: true,})
    })
})
module.exports = router;
