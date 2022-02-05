$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__list-social').toggleClass('menu__list-social--active');
        $(".menu").toggleClass("menu--open");
      });

    $('.header__slider-inner').slick({
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.productions__slider-inner').slick({
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5
                }
            },
        ],
        arrows: false,
        adaptiveHeight: true,
        cssEase: 'linear',
        slidesToShow: 4,
        speed: 800,
        slidesToScroll: 4,
        initialSlide: 0,
        infinite: false,
        variableWidth: true,
        speed: 1000,
        easing: 'ease',
        // autoplay: true,
        autoplaySpeed: 2000
    });


    $('.header__slider-btnPrev').click(function (event) {
        $('.header__slider-inner').slick("slickPrev");
    });
    $('.header__slider-btnNext').click(function (event) {
        $('.header__slider-inner').slick("slickNext");
    });

});





