// JavaScript to handle switching between Sign In and Sign Up
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const video = document.getElementById('backgroundVideo'); // Access video element

registerLink.onclick = () => {
    wrapper.classList.add('active');  // Switch to Sign Up form
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');  // Switch to Sign In form
};

// Set video speed to 0.70x
video.playbackRate = 0.70; 
