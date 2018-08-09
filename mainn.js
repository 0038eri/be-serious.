$(function () {

    $.scrollify({
        section: ".content",
        scrollSpeed: 1600,
        scrollbars: false,
        updateHash: false
    });

    // フェードインしながら上へスライド     
    $('.inviewfadeInUp').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('fadeInUp');
        } else {
            $(this).stop().removeClass('fadeInUp');
        }
    });
    
});