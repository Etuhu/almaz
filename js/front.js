let header = document.querySelector(".header");
let collapseMenu = header.querySelector(".navbar-collapse");
function onWindowScroll() {
    if (window.pageYOffset > (header.clientHeight / 2)) {
      header.classList.add("fixed-top");
      document.body.style.paddingTop = header.clientHeight * 1.3 + "px";
    }
    else {
      header.classList.remove("fixed-top")
      document.body.style.paddingTop = 0;
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

const certificates = new Swiper(".certificates-swiper", {
	slidesPerView: 4,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".certificates-swiper-button-next",
		prevEl: ".certificates-swiper-button-prev",
	},
	pagination: {
		el: ".certificates-swiper-pagination",
		clickable: "true",
	},
    breakpoints: {
        1400: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        400: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2.3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
});

const gallerySwiper = new Swiper(".clinic-gallery-swiper", {
    speed: 1000,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    simulateTouch: false,
    watchOverflow: true,
    navigation: {
        nextEl: ".clinic-gallery-swiper-button-next",
        prevEl: ".clinic-gallery-swiper-button-prev",
    },
    watchSlidesProgress: true,
    pagination: {
        el: ".clinic-gallery-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        300: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },
});

const staffSertificates = new Swiper(".staff-certificates-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 1,
	speed: 300,
	// autoplay: {
	// 	delay: 3000,
	// },
	simulateTouch: true,
	spaceBetween: 30,
	watchOverflow: true,
	navigation: {
		nextEl: ".staff-certificates-swiper-button-next",
		prevEl: ".staff-certificates-swiper-button-prev",
	},
	pagination: {
		el: ".staff-certificates-swiper-pagination",
		clickable: "true",
		dynamicBullets: true,
        dynamicMainBullets: 1,
	},
    breakpoints: {
        1400: {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        400: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        0: {
            slidesPerView: 2.3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
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
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', trackScroll);
scrollButton.addEventListener('click', backToTop);

//Подключение маски для поля ввода телефона
$(document).ready(function(){
    $(".phone-input").inputmask("+7 (999) 999 9999");
});

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

//Скрипты, завязанные на карточках врачей
document.addEventListener("DOMContentLoaded", function () {
    let doctors = document.querySelectorAll(".staff-list .js-doctor-card");
    let doctorsArray = Array.from(doctors);
    let doctorPage = document.querySelector(".staff-item-wrapper");
    let doctorPagePost = document.querySelector(".staff-item-wrapper .post");
    let recordForm = document.querySelector(".record-form");
    let formDoctorName = recordForm.querySelector(".doctor-name");
    let formDoctorNameOptions = formDoctorName.querySelectorAll("option");
    let recordDoctorButtons = document.querySelectorAll(".js-doctor-card .record-button");

//Отделяет фамилию врача от имени и отчества и переносит их на отдельную строку
function separateStaffName (doctor) {
    let text = doctor.querySelector(".title").innerText.trim().split(" ", 1);
    let first = text.shift();
    return ("<span>"+ first + "</span> ") + text.join(" ");
};

//Удаление кнопки записаться для сотрудников, не являющихся врачами
    function removeOrderButton (doctor, post) {
        if (!post.innerText.toLowerCase().includes("врач")) {
            doctor.querySelector(".record-button").remove();
        }
    };

//Выбирает из списка возможной записи имя соответствующего врача, к которому хотят записаться
recordDoctorButtons.forEach(function (recordButton) { // Для каждой кнопки
    let doctorCard = recordButton.closest(".js-doctor-card");
    let doctorName = doctorCard.querySelector(".title");
    recordButton.onclick = function () { // Слушаем нажатие
        for (let i = 0; i < formDoctorNameOptions.length; i++) {
            console.log(formDoctorNameOptions[i]);
            // if (formDoctorNameOptions[i].value.toLowerCase().includes(doctorName.textContent.toLowerCase())) {
                if (doctorName.textContent.toLowerCase().includes(formDoctorNameOptions[i].value.toLowerCase())) {
                formDoctorName.value = doctorName.textContent;
                break;
            } else {
                formDoctorName.value = formDoctorNameOptions[0].value; // Если нажата, то выбирает тот option, который в тексте кнопки.
            }
        };
    }
});

//Вызываем функции на странице со списком специалистов
if (doctorsArray.length > 0) {
    doctorsArray.forEach(function(doctor, index) {
        let post = doctor.querySelector(".content .post");
        removeOrderButton(doctor, post);
    });
    for (let i = 0; i < doctorsArray.length; i++) {
            let text = doctorsArray[i].querySelector(".title-link").innerText.trim().split(" ");
            let first = text.shift();
            doctorsArray[i].querySelector(".title-link").innerHTML = ("<span class='surname'>"+ first + "</span> ") + text.join(" ");
        };
    };

//Вызываем функции на странице отдельного специалиста
    if (doctorPage) {
        removeOrderButton(doctorPage, doctorPagePost);
        separateStaffName(doctorPage.querySelector(".title"));
    };
});