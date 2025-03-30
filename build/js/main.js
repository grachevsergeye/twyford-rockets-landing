let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down - Hide Header
        header.style.top = "-70px";
    } else {
        // Scroll Up - Show Header
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

const initApp = () => {
   const hamburgerBtn = document.getElementById('hamburger-button')
   const mobileMenu = document.getElementById ('mobile-menu')
   
   const toggleMenu = () => {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('flex')
      hamburgerBtn.classList.toggle('toggle-btn')
   }

   hamburgerBtn.addEventListener('click', toggleMenu)
   mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)