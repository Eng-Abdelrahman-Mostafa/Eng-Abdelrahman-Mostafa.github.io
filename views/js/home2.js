let header = document.querySelector("header");
let navbar = document.querySelector(".parent");
let lastScroll = 0;
header.style.paddingTop = navbar.clientHeight + 30 + "px";
window.addEventListener("scroll", function () {
    let scrollTop =
        window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastScroll && scrollTop > 100) {
        navbar.style.top = -+navbar.clientHeight + "px";
    } else {
        navbar.style.top = "0";
    }
    lastScroll = scrollTop;
});

/************start header*********** */

$(document).ready(function () {
    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                let swiper = this;
                for (let i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".img-container")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                            "data-swiper-paralalx-opacity": 0.5,
                        });
                }
            },
            resize: function () {
                this.update();
            },
        },
        navigation: {
            nextEl: ".parallax-slider .next-ctrl",
            prevEl: ".parallax-slider .prev-ctrl",
        },
    };

    parallaxSlider = new Swiper(".parallax-slider", parallaxSliderOptions);
    $(window).on("resize", function () {
        parallaxSlider.destroy();
        parallaxSlider = new Swiper(".parallax-slider", parallaxSliderOptions);
    });
});

/***********start categories******** */
var swiper = new Swiper(".categories .mySwiper", {
    slidesPerView: 8,
    slidesPerGroup: 2,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        575: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
        },

        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 7,
        },
        0: {
            slidesPerView: 2,
        },
    },
});
/***********start offer******** */
var swiper = new Swiper(".offer .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 4100,
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },

        992: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

var swiper = new Swiper(".save .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});
var swiper = new Swiper(".news .mySwiper", {
    slidesPerView: 4,
    autoplay: {
        delay: 4000,
    },
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },

        992: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});
