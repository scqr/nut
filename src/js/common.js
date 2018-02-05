(function ($) {
    //多库共存
    $.noConflict();


    /*添加轮播图效果*/
    class Pic {
        constructor ({el, interval = 3000}) {
            this.el = el;

            this.interval = interval;

            //添加鼠标进入事件
            this.el.addEventListener('mouseenter', () => {
                clearInterval(this.timer);
            });

            //添加鼠标离开事件
            this.el.addEventListener('mouseleave', () => {
                this.autoMove();
            });

            //获取图片列表
            this.img = this.el.$('#uls')[0];
            this.imgs = Array.from(this.img.getElementsByTagName('a'));

            //自动轮播
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
            //改变图片
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


    /*吸顶效果*/
    window.onscroll=function(){
        if($(document).scrollTop() > 0){
            $(".nav_height").hide();

            $(".nav_short").show();
        } else {
            $(".nav_height").show();

            $(".nav_short").hide();
        }
    }
})(jQuery);