const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const loginFormElement = document.getElementById('loginForm');
const signupFormElement = document.getElementById('signupForm');

// Toggle between Login and Sign Up forms
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

// Navigate to home.html on Login
loginFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'home.html';
});

// Navigate to home.html on Sign Up
signupFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'home.html';
});
