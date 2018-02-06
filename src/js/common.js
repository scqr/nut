(function ($) {
    //多库共存
    $.noConflict();


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