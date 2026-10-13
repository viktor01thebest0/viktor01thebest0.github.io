/*=============== SHOW & HIDE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CIRCULAR TEXT ANIMATION ===============*/
const homeText = document.getElementById('home-text')

if (homeText) {
    // .split('') breaks every letter into an array element
    const letters = homeText.textContent.trim().split('')
    const angleStep = 360 / letters.length

    homeText.textContent = ''

    letters.forEach((char, i) => {
        const span = document.createElement('span')
        span.textContent = char
        // Fixed typo: ratate -> rotate and closed parenthesis
        span.style.transform = `rotate(${i * angleStep}deg)`
        homeText.appendChild(span)
    })
}


/*=============== TYPED JS ===============*/
// Note: Changed selector from #home-typed to .home-typed to match your HTML class
if (document.querySelector('.home-typed')) {
    const typedHome = new Typed('.home-typed', {
        strings: ['Future Web Developer', 'Future Software engineer'],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
    })
}


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)



const whyItSwiper = new Swiper('.why-it__swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,

    pagination: {
        el: '.why-it__swiper .swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },
});