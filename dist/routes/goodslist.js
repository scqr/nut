var express = require('express');
var goodslistsdb = require('../db/goodlistsdb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //1、连接数据库，查询所有的数据库
    goodslistsdb.find({ },function (data) {
        //2、用查询到的数据渲染模板，并响应给前端
        res.render("goodslist",{"title":"胡桃里音乐酒馆","goodslist":data});
        console.log(data);
    });
});

module.exports = router;