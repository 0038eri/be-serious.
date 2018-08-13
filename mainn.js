$(function () {

    $.scrollify({
        section: ".content",
        scrollSpeed: 1600,
        scrollbars: false,
        updateHash: false
    });

    var activePoint;
    $('.content').waypoint(function (direction) {
        activePoint = $(this.element);
        var anmCount;
        if (direction === 'down') {
            activePoint.find('.anm').css({
                "opacity": "1",
                "transform": "translateY(0%)"
            });
        } else {
            activePoint.find('.anm').css({
                "opacity": "0",
            });
        }
    }, {
        offset: '10%'
    });

});