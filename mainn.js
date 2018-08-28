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
    var bgAnm;
    var iphoneTextAnm;
    var iphoneImgAnm;
    var androidTextAnm;
    var androidImgAnm;
    var gameTextAnm;
    var gameImgAnm;
    var webTextAnm;
    var webImgAnm;
    $('.content').waypoint(function (direction) {
        activePoint = $(this.element);
        if (direction === 'down') {
            activeOp = activePoint.find('.op');
            activeTrans = activePoint.find('.trans');
            activeAnm = activePoint.find('.anm');
            bgAnm = activePoint.find('.bgColor');
            iphoneTextAnm = activePoint.find('.iphone-text');
            iphoneImgAnm = activePoint.find('.iphone-img');
            androidTextAnm = activePoint.find('.android-text');
            androidImgAnm = activePoint.find('.android-img');
            gameTextAnm = activePoint.find('.game-text');
            gameImgAnm = activePoint.find('.game-img');
            webTextAnm = activePoint.find('.web-text');
            webImgAnm = activePoint.find('.web-img');
            activeOp.css({
                "opacity": "1",
            });
            activeTrans.css({
                "transform": "translateY(0%)"
            });
            bgAnm.addClass('colorAnm');
            iphoneTextAnm.addClass('iphoneText-animation');
            iphoneImgAnm.addClass('iphoneImg-animation');
            androidTextAnm.addClass('androidText-animation');
            androidImgAnm.addClass('androidImg-animation');
            gameTextAnm.addClass('gameText-animation');
            gameImgAnm.addClass('gameImg-animation');
            webTextAnm.addClass('webText-animation');
            webImgAnm.addClass('webImg-animation');
        }
    }, {
        offset: '40%'
    });

});