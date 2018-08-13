$(function () {

    $.scrollify({
        section: ".content",
        scrollSpeed: 1600,
        scrollbars: false,
        updateHash: false
    });

    $('#serious h1, #serious .h2').css({
        "opacity": "0"
    });
    $(window).scroll(function () {
        $('.content').each(function () {
            var contentPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > contentPos - windowHeight) {
                $("#serious h1, #serious .h2", this).css({
                    "opacity": "1",
                    "transform": "translateY(0%)"
                });
            } else {
                $('#serious h1, #serious .h2', this).css({
                    "opacity": "0"
                });
                $("#serious h1", this).css({
                    "transform": "translteY(8%)"
                });
                $("#serious .h2", this).css({
                    "transform": "translateY(16%)"
                });
            }
        });

    });



});