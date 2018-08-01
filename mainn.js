(function () {

    window.onload = function () {
        section01Anm();
    }

    $(window).scroll(function () {
        if ($(this).scrollTop > 0) {
            section01Anm();
        }
        if ($(this).scrollTop > 700) {
            section02Anm();
        }
        if ($(this).scrollTop > 1400) {}
    });

    // セクション1つめアニメーション

    function beSerious() {
        $('#serious h1').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function honkiNiNarou() {
        $('#serious .h2').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function section01Anm() {
        beSerious();
        setTimeout(honkiNiNarou, 200);
    }

    // セクション2つめのアニメーション

    function message() {
        $('#message h1').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function paragraph01() {
        $('#message .p01').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function paragraph02() {
        $('#message .p02').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function paragraph03() {
        $('#message .p03').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function paragraph04() {
        $('#message .p04').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function paragraph05() {
        $('#message .p05').css({
            "opacity": "1.0",
            "transform": "translateY(0%)"
        });
    }

    function section02Anm() {
        message();
        setTimeout(paragraph01, 200);
        setTimeout(paragraph02, 400);
        setTimeout(paragraph03, 600);
        setTimeout(paragraph04, 800);
        setTimeout(paragraph05, 1000);
    }

});