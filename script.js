// fetch header and footer
fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data);

fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer-placeholder').innerHTML = data);


    // 
const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');
}

// Profile Sub menu script

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}


 // Add event listeners to links with the class 'transition-link'
 document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent immediate navigation
      const href = this.getAttribute('href');
      document.body.classList.add('fade-out'); // Add fade-out class
      setTimeout(() => {
        window.location.href = href; // Redirect after the fade-out
      }, 500); // Match the transition duration (500ms)
    });
  });