$(function () {

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
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
                    slidesToScroll: 1
                }
            },
        ],
        arrows: false,
        adaptiveHeight: true,
        cssEase: 'linear',
        slidesToShow: 4,
        speed: 800,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: false,
        variableWidth: true,
        speed: 1000,
        easing: 'ease',
        // autoplay: true,
        autoplaySpeed: 2000
    });

    $('.partners__slider-inner').slick({
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            },
        ],
        arrows: false,
        cssEase: 'linear',
        slidesToShow: 4,
        speed: 800,
        slidesToScroll: 2,
        initialSlide: 0,
        infinite: false,
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





