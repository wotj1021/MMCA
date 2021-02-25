var i = 1
$(document).ready(function(){
    var $headerTop = $('.gnb').offset().top;

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();         // 스크롤도니 거리를 말함
        if(scroll > $headerTop ){
            console.log(scroll);
            $('.gnb').addClass('stick');
            $('h1').addClass('stick');
            $('.gnb_all').addClass('stick');
        }else {
            $('.gnb').removeClass('stick');
            $('h1').removeClass('stick');
            $('.gnb_all').removeClass('stick');
        }
    })

    $('.depth0 > li').mouseenter(function(){
        $(this).find('.depth_wrap').stop().fadeIn()
    })
    $('.depth0 > li').mouseleave(function(){
        $('.depth0 > li').find('.depth_wrap').stop().fadeOut()
    })

    $('#gnb_all_ch').click(function(){
        if(i == 1){$('.gnb_allmenu_wrap').stop().slideDown(500); i = 2} 
        else {$('.gnb_allmenu_wrap').stop().slideUp(500); i = 1} 
    })
});