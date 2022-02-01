$(function () {

    $('.header__slider-inner').slick({
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.productions__slider-inner').slick({
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 2000
    });


    $('.header__slider-btnPrev').click(function (event) {
        $('.header__slider-inner').slick("slickPrev");
    });
    $('.header__slider-btnNext').click(function (event) {
        $('.header__slider-inner').slick("slickNext");
    });

});

