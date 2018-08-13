$(function () {

        $.scrollify({
            section: ".content",
            scrollSpeed: 1600,
            scrollbars: false,
            updateHash: false
        });

    $('.content').waypoint(function (direction) {
        var activePoint = $(this.element);
        if (direction === 'down') {　 //scroll down
            activePoint.find('.anm').css({
                "opacity":"1"
//                "transform":"translateY(0%)"
            })
        } else { //scroll up
            activePoint.find('.anm').css({
                "opacity":"0",
            });
        }
    }, {
        offset: '70%'
    });

});