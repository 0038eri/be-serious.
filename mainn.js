$(function () {

    $.scrollify({
        section: ".content",
        scrollSpeed: 1600,
        scrollbars: false,
        updateHash: false
    });

    $('.animation-box').waypoint(function (direction) {
        var activePoint = $(this.element);
        if (direction === 'down') {　 //scroll down
            activePoint.addClass('active');
        } else { //scroll up
            activePoint.removeClass('active');
        }
    }, {
        offset: '0%'
    });


});