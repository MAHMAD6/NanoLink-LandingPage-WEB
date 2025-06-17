const navItemsOptions = document.querySelector('.nav-menu');
const navItemsLoginOptions = document.querySelector('.login-container');
const navBar = document.querySelector('.navbar');
const heading = document.querySelector('.heading');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
let count = 0;


hamburger.addEventListener('click', () => {
  heading.classList.add('hidden');
  hamburger.classList.add('hidden');
  closeBtn.classList.remove('hidden');

  navBar.classList.add('navbar-active');
  navItemsOptions.classList.add('nav-menu-active');
  if (count == 0) {

    [...navItemsLoginOptions.children].forEach(child => {
      navItemsOptions.appendChild(child.cloneNode(true));
    });
    count++;
  }

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



const imageElements = document.querySelectorAll('.circle-img');
const titleElement = document.querySelector('.circle-title');

const imageData = [
  { default: "assets/images/url.png", active: "assets/images/url-yellow.png", label: "Enter Your Link" },
  { default: "assets/images/mobile.png", active: "assets/images/mobile-yellow.png", label: "Shorten Instantly" },
  { default: "assets/images/share.png", active: "assets/images/share-yellow.png", label: "Share with Others" },
  { default: "assets/images/earn.png", active: "assets/images/earn-yellow.png", label: "Earn for Every Click" }
];

let activeIndex = 1; 


imageElements[0].classList.add("active");

function cycleImages() {
  imageElements.forEach((img) => {
    img.classList.remove("active");
  });
  titleElement.classList.add("fade-out");

  setTimeout(() => {
    imageElements.forEach((img, idx) => {
      img.src = imageData[idx].default;
    });

    const activeImage = imageElements[activeIndex];
    activeImage.src = imageData[activeIndex].active;
    activeImage.classList.add("active");

    titleElement.textContent = imageData[activeIndex].label;
    titleElement.classList.remove("fade-out");

    activeIndex = (activeIndex + 1) % imageElements.length;
  }, 300);
}




setTimeout(() => {
  setInterval(cycleImages, 2000);
}, 2000);


document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    parent.classList.toggle('open');
  });
});
