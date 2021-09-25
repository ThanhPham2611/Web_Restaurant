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
   
  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      tabLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .tabbar a[href*='+id+']').classList.add('active');
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

// document.querySelector('#heart-icon').onclick = () => {
//     document.querySelector('#heart-form').classList.toggle('active');
// }
// // document.querySelector('#close').onclick = () => {
// //     document.querySelector('#heart-form').classList.remove('active');
// // }

// Swiper home
let swipper = new Swiper(".home-slide", {
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
let swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
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
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;