var express = require('express');
var goodslistsdb = require('../db/goodlistsdb');
var router = express.Router();
var commentsdb = require("../db/commentsdb");

/* GET home page. */
router.get('/', function(req, res, next) {
    //接收前端传来的数据（goodsid）
    const goodsid = req.query.goodsid;
    var pageindex = req.query.pageindex || 1;
    // if(!pageindex){
    //     pageindex = 1;
    // }

    //1、连接数据库，查询所有的数据库
    //1)、查询商品详情
    goodslistsdb.find({"goodsid":goodsid},function (goodsdetails) {
        //2)、查询商品的评论
        commentsdb.findByPageIndex({"goodsid":goodsid},pageindex,function (comments,maxpageindex) {
            let showcomment = req.session.username?"block":"none";
            //2、用查询到的数据渲染模板，并响应给前端
            res.render("goodsdetail",{
                "title":"胡桃里音乐酒馆",
                "goodsdetail":goodsdetails[0],
                "comments":comments,
                "showcomment":showcomment,
                "page":{
                    "maxPageIndex":maxpageindex,
                    "currPageIndex":pageindex
                }
            });
        });
    });
});

module.exports = router;