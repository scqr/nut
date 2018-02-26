var express = require('express');
var router = express.Router();
var vipsdb = require("../db/vipdb");

router.get("/",function (req,res) {
    /* GET users listing. */
    let username = req.query.username;

    console.log("username="+username);

    //2、链接数据库，进行保存
    vipsdb.find({"username":username},function (data) {
        let t = data.length > 0 ? 1 : 0;
        res.send(String(t));
    });
});

module.exports = router;
