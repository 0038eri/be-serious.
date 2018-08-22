$(function () {

    var current;
    $.scrollify({
        section: ".content",
        scrollSpeed: 1600,
        scrollbars: false,
        updateHash: false
    });

    var activePoint;
    var activeOp;
    var activeTrans;
    var activeAnm;
    var activeContent;
    var anmBool = false;
    var anmCount = 0;
    $('.content').waypoint(function (direction) {
        activePoint = $(this.element);
        if (direction === 'down') {
            activeOp = activePoint.find('.op');
            activeTrans = activePoint.find('.trans');
            activeAnm = activePoint.find('.anm');
            activeContent = activePoint.prop('id');
            activeOp.css({
                "opacity": "1",
            });
            activeTrans.css({
                "transform": "translateY(0%)"
            });
        }
    }, {
        offset: '40%'
    });

});