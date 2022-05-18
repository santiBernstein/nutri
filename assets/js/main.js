document.addEventListener('DOMContentLoaded', function () {

/*show menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile

const navLink = document.querySelectorAll('.nav--link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
          navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll sections active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

// change background header 

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll top 

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//swiper

const swiper = new Swiper('.swiper', {
    
    spaceBetween: 16,
    loop: false,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        576:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView:3,
        },        
        1024:{
            slidesPerView: 4,
        },
    },     
   
  });

  //gsap animation

  //home
// gsap.from('.home--img', {opacity: 0, duration: 3, delay: .5, x:60})
// gsap.from('.home--data', {opacity: 0, duration: 3, delay: .8, y:25})
// gsap.from('.home--greeting', {opacity: .2, duration: 4, delay: 1, y:25, ease:'expo.out', stagger:.2}) 
// gsap.from('.home--name', {opacity: .8, duration: 4, delay: 1, y:25, ease:'expo.out', stagger:.2}) 
// gsap.from('.home--social', {opacity: 0, duration: 10, delay: 2, y:50, ease:'expo.out', stagger:.2}) 
//   //nav
// gsap.from('.nav--logo, .nav--toggle', {opacity: 0, duration: 10, delay: 1.5, y:25, ease:'expo.out', stagger:.2}) 
// gsap.from('.nav--item', {opacity: 0, duration: 5, delay: 10, y:25, ease:'expo.out', stagger:.2}) 

// scroll reveal animation //

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//sr home //
sr.reveal('.home--img',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home--data',{delay: 400})
sr.reveal('.home--social-icon, .home--name',{interval: 200})

//especialties
sr.reveal('.especialties--data', {delay:100})
sr.reveal('.especialties--list', {delay:200})

//sr about //
sr.reveal('.section-title',{})
sr.reveal('.section-subtitle',{delay: 200})
sr.reveal('.about--data',{delay: 400})
sr.reveal('.about-content',{delay: 400})

//sr services//
sr.reveal('.services--subtitle',{})
sr.reveal('.services--title',{delay: 200})
sr.reveal('.services--data',{interval: 200})
sr.reveal('.services--description',{delay: 400})
sr.reveal('.services--icon',{delay: 400})

//project//
sr.reveal('.project--title',{interval: 200})

// //recipe//
// sr.reveal('.recipe--content',{interval: 100})

//contact//
sr.reveal('.contact--box',{interval: 100})
sr.reveal('.contact--title',{interval: 150})
sr.reveal('.contact--description',{interval: 500})
sr.reveal('.contact--icon',{interval: 400})
sr.reveal('.contact--input',{interval: 200})

// email js

function validate(){
    let name = document.querySelector('.name')
    let lastname = document.querySelector('.lastname')
    let email = document.querySelector('.email')
    let phone = document.querySelector('.phone')
    let msg = document.querySelector('.msg')
    let send = document.querySelector('.send')

    send.addEventListener('click', (e)=>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == "" ){
            emptyerror();
        } else {
            sendmail (name.value, lastname.value, phone.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_ujzzio8","template_91qvx4q",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Oh No....!",
        text: "Los campos no pueden estar vacios!",
        icon: "error",        
      });
}

function success(){
    swal({
        title: "Mensaje Enviado!",
        text: "Te contestamos lo antes posible!",
        icon: "success",        
      });
}

}, false);


