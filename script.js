// smooth reloding
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollPos', window.scrollY);
});

window.addEventListener('load', () => {
  const scrollPos = sessionStorage.getItem('scrollPos');
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos, 10));
    sessionStorage.removeItem('scrollPos');
  }
});


window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});



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

// // Profile Sub menu script

// let subMenu = document.getElementById("subMenu");

// function toggleMenu() {
//     subMenu.classList.toggle("open-menu");
// }


//  // Add event listeners to links with the class 'transition-link'
//  document.querySelectorAll('.transition-link').forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault(); // Prevent immediate navigation
//       const href = this.getAttribute('href');
//       document.body.classList.add('fade-out'); // Add fade-out class
//       setTimeout(() => {
//         window.location.href = href; // Redirect after the fade-out
//       }, 500); // Match the transition duration (500ms)
//     });
//   });


// Profile section //
// Profile section //
// Profile section //


// Profile overlay functionality
// Profile overlay functionality
// Profile overlay functionality
// Profile overlay functionality
function toggleOverlay() {
  const overlay = document.getElementById("profileOverlay");
  if (overlay) {
    // Toggle between showing and hiding the overlay
    if (overlay.style.display === "flex") {
      overlay.style.display = "none";
    } else {
      overlay.style.display = "flex";
    }
  }
}

// Close overlay when clicking outside the modal
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("profileOverlay");
  const modal = document.querySelector(".profile-modal");

  if (overlay && modal) {
    document.addEventListener("click", function (e) {
      // Close overlay only if click is outside the modal
      if (overlay.style.display === "flex" && !modal.contains(e.target) && e.target !== modal) {
        overlay.style.display = "none";
      }
    });
  }

  // Menu item click functionality
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all menu items
      menuItems.forEach((menuItem) => menuItem.classList.remove("active"));
      // Add active class to the clicked menu item
      this.classList.add("active");
    });
  });
});

  