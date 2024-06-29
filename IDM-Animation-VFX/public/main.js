document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function () {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    dropdownButton.addEventListener('click', function () {
        const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
        dropdownButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownButton.setAttribute('aria-expanded', 'false');
            dropdownMenu.classList.add('hidden');
        }
    });
});

function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "black";
    }


    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
    elmnt.style.color = 'white';
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("defaultOpen").click();
});



var swiper = new Swiper('.trusted-by-swiper', {
    spaceBetween: 12,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 5000,
    loop: true,
    slidesPerView: "auto",
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            spaceBetween: 12,
        },
        480: {
            spaceBetween: 12,
        },
        767: {
            spaceBetween: 12,
        },
        992: {
            spaceBetween: 12,
        }
    },
});


const slider = document.getElementById('image-slider');
const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showImage(index) {
    const translateValue = -index * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function autoScroll() {
    nextImage()
}
setInterval(autoScroll, 4000);


const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

const openModal = () => {
    modal.classList.remove("-top-full");
    modal.classList.add("top-0");
}

const closeModal = () => {
    modal.classList.add("-top-full");
    modal.classList.remove("top-0");
}

if (modal) {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    window.addEventListener("click", (event) => {
        if (event.target === modalContent) {
            closeModal();
        }
    });
} else {
    console.error("Modal element not found.");
}
