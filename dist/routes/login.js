var express = require('express');
var router = express.Router();
var vipsdb = require("../db/vipdb");

router.get("/",function (req,res) {
    res.render("login",{"errmsg":""});
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    //1、接收数据（用户名，密码，年龄）
    let username = req.body.username;
    let userpass = req.body.userpass;

    console.log("username="+username);
    console.log("userpass="+userpass);

    //2、链接数据库，进行保存
    vipsdb.find({
        "username":username,
        "userpass":userpass
    },function (data) {
        //3、响应
        // res.send(isSuccess);
        if(data.length == 0) {
            res.render("login",{"errmsg":"登录失败！"});
        } else {
            //用session保存了一个变量username，这个username保存到服务器端的内存里
            req.session.username = username;
            //记录cookie，在服务器端执行的代码。这个username保存前端硬盘上。
            res.cookie("username",username);
            res.redirect("index.html");
            // res.redirect("index");
        }
    });
});

module.exports = router;
