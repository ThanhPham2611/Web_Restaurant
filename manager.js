let menu = document.querySelector('#menu-bars');
let tabbar = document.querySelector('.tabbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    tabbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let tabLinks = document.querySelectorAll('header .tabbar a');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  tabbar.classList.remove('active');
  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      tabLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('header .tabbar a[href*='+ id+']').classList
      });
    };
  });
};

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

document.querySelector('#heart-icon').onclick = () => {
  document.querySelector('#Btn-heart').classList.toggle('active')
}

// Swiper home
let swiper = new Swiper(".home-slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

// Swiper home
let swipper = new Swiper(".review-slide", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  loop:true,
});
