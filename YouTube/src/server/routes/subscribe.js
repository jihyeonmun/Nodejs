const express = require('express');
const router = express.Router();

const {Subscriber} = require("../models/Subscriber");

//=================================
//             Subscribe
//=================================

router.post('/uploadVideo', (req, res) => {
    //비디오 정보들을 서버에 저장한다.
    const video = new Video(req.body)
    video.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        res.status(200).json({ success: true })
    })
});

module.exports = router;