$(function () {

    // スクロールプラグイン
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
    var experience1;
    var experience2;
    var experience3;
    var experience4;
    var shine1;
    var shine2;
    var shine3;
    var shine4;
    var creative1;
    var creative2;
    var creative3;
    var title;
    var kiran;

    $('.content').waypoint(function (direction) {

        activePoint = $(this.element);

        if (direction === 'down') {

            // 取得
            activeOp = activePoint.find('.op');
            activeTrans = activePoint.find('.trans');
            activeAnm = activePoint.find('.anm');
            bgAnm = activePoint.find('.color');
            iphoneTextAnm = activePoint.find('.iphone-text');
            iphoneImgAnm = activePoint.find('.iphone-img');
            androidTextAnm = activePoint.find('.android-text');
            androidImgAnm = activePoint.find('.android-img');
            gameTextAnm = activePoint.find('.game-text');
            gameImgAnm = activePoint.find('.game-img');
            webTextAnm = activePoint.find('.web-text');
            webImgAnm = activePoint.find('.web-img');
            experience1 = activePoint.find('.exOne');
            experience2 = activePoint.find('.exTwo');
            experience3 = activePoint.find('.exThree');
            experience4 = activePoint.find('.exFour');
            shine1 = activePoint.find('.shOne');
            shine2 = activePoint.find('.shTwo');
            shine3 = activePoint.find('.shThree');
            shine4 = activePoint.find('.shFour');
            creative1 = activePoint.find('.crOne');
            creative2 = activePoint.find('.crTwo');
            creative3 = activePoint.find('.crThree');
            title = activePoint.find('.ti0');
            kiran = activePoint.find('.kiran');

            // 実行
            activeOp.css({
                "opacity": "1",
            });
            activeTrans.css({
                "transform": "translateY(0%)"
            });

            //  実行のためにクラス付与
            bgAnm.addClass('colorAnm');
            iphoneTextAnm.addClass('iphoneText-animation');
            iphoneImgAnm.addClass('iphoneImg-animation');
            androidTextAnm.addClass('androidText-animation');
            androidImgAnm.addClass('androidImg-animation');
            gameTextAnm.addClass('gameText-animation');
            gameImgAnm.addClass('gameImg-animation');
            webTextAnm.addClass('webText-animation');
            webImgAnm.addClass('webImg-animation');
            experience1.addClass('experience-animation1');
            experience2.addClass('experience-animation2');
            experience3.addClass('experience-animation3');
            experience4.addClass('experience-animation4');
            shine1.addClass('shine-animation1');
            shine2.addClass('shine-animation2');
            shine3.addClass('shine-animation3');
            shine4.addClass('shine-animation4');
            creative1.addClass('creative-animation1');
            creative2.addClass('creative-animation2');
            creative3.addClass('creative-animation3');
            title.addClass('title-animation');
            kiran.addClass('kiran-animation');

        }

    }, {

        offset: '40%'

    });

});