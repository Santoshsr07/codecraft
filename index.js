// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCunrx-viNXwOAuWGmS64wYGWZd95TIlJU",
    authDomain: "codecraft-fbc1f.firebaseapp.com",
    projectId: "codecraft-fbc1f",
    storageBucket: "codecraft-fbc1f.appspot.com",
    messagingSenderId: "812745018698",
    appId: "1:812745018698:web:82d1caca64e365265c45b3",
    measurementId: "G-J59EVD1VLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // Get Register Form
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Register form submitted");

            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("User created:", userCredential.user);
                    alert("Account created successfully!");
                    window.location.href = "home.html";
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                    document.getElementById("error-message").textContent = error.message;
                });
        });
    } else {
        console.error("Error: register-form not found!");
    }

    // Get Login Form
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Login form submitted");

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("User logged in:", userCredential.user);
                    alert("Login successful!");
                    window.location.href = "home.html";
                })
                .catch((error) => {
                    console.error("Error logging in:", error);
                    alert(`Login failed: ${error.message}`);
                });
        });
    } else {
        console.error("Error: login-form not found!");
    }
});