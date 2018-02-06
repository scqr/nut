(function ($) {
    /*banner*/
    class Pic {
        constructor ({el, interval = 3000}) {
            this.el = el;

            this.interval = interval;

            //add mouseenter event
            this.el.addEventListener('mouseenter', () => {
                clearInterval(this.timer);
        });

            //add mouseleave event
            this.el.addEventListener('mouseleave', () => {
                this.autoMove();
        });

            //get pic list
            this.img = this.el.$('#uls')[0];
            this.imgs = Array.from(this.img.getElementsByTagName('a'));

            //auto
            this.autoMove();
        }
        rightMove () {
            this.index++;
            if (this.index >= this.btns.length) {
                this.index = 0;
            }
            this.move();
        }
        move () {
            //change pic
            this.imgs.forEach(v => {
                bufferMove(v, {opacity: 0});
            this.imgs[this.index].css("display", "block");
            bufferMove(this.imgs[this.index], {opacity: 100});
        });
        }
        autoMove () {
            this.timer = setInterval(() => {
                this.rightMove();
        }, this.interval);
        }
    }


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