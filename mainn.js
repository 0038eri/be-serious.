$(function () {

    $('.effect').css({
        "opacity": "0"
    });

    //    window.onload = function () {
    //        section01Anm();
    //    }

    $.scrollify({
        section: ".content",
        scrollSpeed: 1600,
        scrollbars: false,
        updateHash: false
    });

    //    var id;
    //    $('.content').waypoint(function (direction) {
    //        var activePoint = $(this.element);
    //        if (direction === 'down') {
    //            activePoint.addClass('active');
    //            id = $(activePoint) a.attr('id');
    //            switch (id) {
    //                case "serious":
    //                    section01Anm();
    //                    break;
    //                case "message":
    //                    section02Anm();
    //                    break;
    //                default:
    //                    break;
    //            }
    //        } else { //scroll up
    //            activePoint.removeClass('active');
    //        }
    //    }, {
    //        offset: '0%'
    //    });

    // セクション1つめアニメーション

    function section01Anm() {
        $('#serious h1').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
        $('#serious .h2').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    // セクション2つめのアニメーション

    function section02Anm() {
        $('#message h1').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
        $('#message h3').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

}); 