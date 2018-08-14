$(function () {

    $.scrollify({
        section: ".content",
        scrollSpeed: 1600,
        scrollbars: false,
        updateHash: true
    });

    var activePoint;
    var activeOp;
    var activeTrans;
    $('.content').waypoint(function (direction) {
        activePoint = $(this.element);
        var anmCount;
        if (direction === 'down') {
            activeOp = activePoint.find('.op');
            activeTrans=activePoint.find('.trans');
            activeOp.css({
                "opacity": "1",
            });
            activeTrans.css({
                "transform": "translateY(0%)"
            })
        } else {
            activeOp.css({
                "opacity": "0",
            });
        }
    }, {
        offset: '10%'
    });

});