(function ($) {
//     /*banner*/
//     $('#uls').height($('#uls a img').height());
//         console.log($('#uls a img').height());
//         $(window).resize(function(){
//         $('#uls').height($('#uls a img').height());
//     });
    var count=0;
    $('#uls').height(592);
    console.log(0);
    $(window).resize(function() {
        $('#uls').height($('#uls a').eq(count).height());
    });

    //2s 轮播

    let iTimer = setInterval(function () {
        count++;
        if(count==2){count=0}
        if(count==1){
            $('#Img1').fadeOut();
            $('#Img2').fadeIn();
        }
        if(count==0){
            $('#Img2').fadeOut();
            $('#Img1').fadeIn();
        }
    },2000)
    // let currOpacity = 1;
    // let incOpacity = -0.1;
    // let iTimer = setInterval(function () {
    //     // console.log(1);
    //     //change data
    //     currOpacity = currOpacity + incOpacity;
    //     //judge limit data
    //     if (currOpacity <= 0) {
    //         incOpacity = 0.1;
    //         currOpacity = 0;
    //     } else if (currOpacity >= 1) {
    //         incOpacity = -0.1;
    //         currOpacity = 1;
    //     }
    //     //change pic
    //     $("Img1").css({"opacity":"1 - currOpacity"});
    //     $("Img2").css({"opacity":"currOpacity"});
    // }, 200);



    /*banner2*/
    $(".ColCont2_1 .A1").on("mouseenter",()=>{
        $('.AShow1').css({"display":"none"});
        $('.AShow2').css({"display":"inline"});
    });
    $(".ColCont2_1 .A1").on("mouseleave",()=>{
        $('.AShow1').css({"display":"inline"});
        $('.AShow2').css({"display":"none"});
    });

    $(".ColCont2_1 .A2").on("mouseenter",()=>{
        $('.AShow1_1').css({"display":"none"});
        $('.AShow2_1').css({"display":"inline"});
    });
    $(".ColCont2_1 .A2").on("mouseleave",()=>{
        $('.AShow1_1').css({"display":"inline"});
        $('.AShow2_1').css({"display":"none"});
    });

    $(".ColCont2_1 .A3").on("mouseenter",()=>{
        $('.AShow1_2').css({"display":"none"});
        $('.AShow2_2').css({"display":"inline"});
    });
    $(".ColCont2_1 .A3").on("mouseleave",()=>{
        $('.AShow1_2').css({"display":"inline"});
        $('.AShow2_2').css({"display":"none"});
    });

    $('.ColCont2_2 ul .col-md-4').on("mouseenter",()=>{
        $('#a1').css({"background":"rgb(136,107,89)","color":"rgb(246,235,218)"});
        $('#a1 em').css({"display":"inline"});
        $('#a2').css({"display":"block"});
    });
    $('.ColCont2_2 ul .col-md-4').on("mouseleave",()=>{
        $('#a1').css({"background":"url(images/bg4.png) center bottom / 100% no-repeat","color":"rgb(109, 93, 82)"});
        $('#a1 em').css({"display":"none"});
        $('#a2').css({"display":"none"});
    });
    $('.ColCont2_2 ul .col-sm-4').on("mouseenter",()=>{
        $('#b1').css({"background":"rgb(136,107,89)","color":"rgb(246,235,218)"});
        $('#b1 em').css({"display":"inline"});
        $('#b2').css({"display":"block"});
    });
    $('.ColCont2_2 ul .col-sm-4').on("mouseleave",()=>{
        $('#b1').css({"background":"url(images/bg4.png) center bottom / 100% no-repeat","color":"rgb(109, 93, 82)"});
        $('#b1 em').css({"display":"none"});
        $('#b2').css({"display":"none"});
    });
    $('.ColCont2_2 ul .last').on("mouseenter",()=>{
        $('#c1').css({"background":"rgb(136,107,89)","color":"rgb(246,235,218)"});
        $('#c1 em').css({"display":"inline"});
        $('#c2').css({"display":"block"});
    });
    $('.ColCont2_2 ul .last').on("mouseleave",()=>{
        $('#c1').css({"background":"url(images/bg4.png) center bottom / 100% no-repeat","color":"rgb(109, 93, 82)"});
        $('#c1 em').css({"display":"none"});
        $('#c2').css({"display":"none"});
    });
})(jQuery);