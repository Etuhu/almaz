let header = document.querySelector(".header");
let collapseMenu = header.querySelector(".navbar-collapse");
function onWindowScroll() {
    if (window.pageYOffset > (header.clientHeight / 2)) {
      header.classList.add("fixed-top");
    }
    else {
      header.classList.remove("fixed-top")
    }
}

window.addEventListener("scroll", onWindowScroll);
window.addEventListener("DOMContentLoaded", onWindowScroll);
collapseMenu.addEventListener("show.bs.collapse", function () {
    if (!header.classList.contains("open-mobile")) {
        header.classList.add("open-mobile");
    }
    if (!document.body.classList.contains("fixed")) {
        document.body.classList.add("fixed");
    }
});
collapseMenu.addEventListener("hidden.bs.collapse", function () {
    if (header.classList.contains("open-mobile")) {
        header.classList.remove("open-mobile");
    }
    if (document.body.classList.contains("fixed")) {
        document.body.classList.remove("fixed");
    }
});

//Слайдеры
const promoSwiper = new Swiper(".promo-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: false,
	// autoplay: {
	// 	delay: 5000,
	// },
    // preloadImages: true,
    // lazy: true,
    // loadPrevNext: true,
	spaceBetween: 0,
	watchOverflow: true,
	navigation: {
		nextEl: ".promo-swiper-button-next",
		prevEl: ".promo-swiper-button-prev",
	},
	pagination: {
		el: ".promo-swiper-pagination",
		clickable: true,
	},
});



const staffSwiper = new Swiper(".staff-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: false,
	// autoplay: {
	// 	delay: 5000,
	// },
	spaceBetween: 0,
	watchOverflow: true,
	navigation: {
		nextEl: ".staff-swiper-button-next",
		prevEl: ".staff-swiper-button-prev",
	},
	pagination: {
		el: ".staff-swiper-pagination",
		clickable: "true",
	},
});


//Кнопка прокрутки наверх
var scrollButton = document.getElementById('top-button');



function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords/2) {
      scrollButton.classList.add('show');
    }
    if (scrolled < coords/2) {
      scrollButton.classList.remove('show');
    }
}

function backToTop() {
    //   window.scrollTo(0, 0);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', trackScroll);
scrollButton.addEventListener('click', backToTop);


//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};