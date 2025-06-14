const navItemsOptions = document.querySelector('.nav-menu');
const navItemsLoginOptions = document.querySelector('.login-container');
const navBar = document.querySelector('.navbar');
const heading = document.querySelector('.heading');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');



hamburger.addEventListener('click', () => {
    heading.classList.add('hidden');
    hamburger.classList.add('hidden');
    closeBtn.classList.remove('hidden');

    navBar.classList.add('navbar-active');
    navItemsOptions.classList.add('nav-menu-active');

    [...navItemsLoginOptions.children].forEach(child => {
        navItemsOptions.appendChild(child.cloneNode(true));
    });


});


closeBtn.addEventListener('click', () => {
    closeBtn.classList.add('hidden');
    hamburger.classList.remove('hidden');
    heading.classList.remove('hidden');
    navBar.classList.remove('navbar-active');
    navItemsOptions.classList.remove('nav-menu-active');
});


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
