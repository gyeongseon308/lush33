$(document).ready(function () {
    $(".nav .gnb>li").mouseenter(function () {
        $(".menu").addClass("on");
    });
    $(".nav .gnb>li").mouseleave(function () {
        $(".menu").removeClass("on");
    });

    $(".hamburg_ico").click(function () {
        $(".hamburg_menu").stop().fadeIn(500);
        $(".close").stop().fadeIn(500);
    });
    $(".close").click(function () {
        $(".hamburg_menu").stop().fadeOut(500);
        $(".close").stop().fadeOut(500);
    });

    $(".link_menu").click(function () {
        if ($(this).hasClass("active")) {
            $(".link_menu").removeClass("active").siblings().slideUp();
        } else {
            $(".link_menu").removeClass("active").siblings().slideUp();
            $(this).addClass("active").siblings().slideDown();
        }
    });
    $(".tab_menu>li").click(function(){
        let list = $(this).index();
        $(".tab_conts>.event_conts").stop().fadeOut();
        $(".tab_conts>.event_conts").eq(list).stop().fadeIn();
        
        $(".tab_menu>li").stop().removeClass("active"); 
        $(".tab_menu>li").eq(list).addClass("active");
    });

    $(".tab_menu>li").click(function(){
        let list = $(this).index();
        $(".tab_conts>.event_conts").stop().fadeOut();
        $(".tab_conts>.event_conts").eq(list).stop().fadeIn();
        
        $(".tab_menu>li").stop().removeClass("active"); 
        $(".tab_menu>li").eq(list).addClass("active");
    });
});
