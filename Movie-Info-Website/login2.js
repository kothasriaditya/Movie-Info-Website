// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', e => {
// Prevent the default form submission behavior
e.preventDefault();

// Get the input elements
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Get the input values
const username = usernameInput.value.trim();
const password = passwordInput.value.trim();

// Check if the username and password are valid
if (username === 'kotha' && password === 'aditya') {
// Redirect the user to the homepage
window.location.href = '1more.html';
} else {
// Show an error message
alert('Incorrect username or password');
}
});

// Forgot password event listener
const forgotPasswordLink = document.querySelector('#forgot-password');
forgotPasswordLink.addEventListener('click', e => {
e.preventDefault();
// Redirect the user to the forgot password page
window.location.href = 'forgotpassword.html';
});

// New user registration event listener
const registerLink = document.querySelector('#register');
registerLink.addEventListener('click', e => {
e.preventDefault();
// Redirect the user to the new user registration page
window.location.href = 'register.html';
});

// Get the form element for new user registration
const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', e => {
e.preventDefault();

// Get the input elements
const usernameInput = document.querySelector('#register-username');
const passwordInput = document.querySelector('#register-password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// Get the input values
const username = usernameInput.value.trim();
const password = passwordInput.value.trim();
const confirmPassword = confirmPasswordInput.value.trim();

// Check if the password and confirm password match
if (password !== confirmPassword) {
alert('Passwords do not match');
return;
}

// Perform the new user registration
// ...
alert('Registration successful! Please log in to continue');
// Redirect the user to the login page
window.location.href = 'login.html';
});

// Get the form element for forgot password
const forgotPasswordForm = document.querySelector('#forgot-password-form');
forgotPasswordForm.addEventListener('submit', e => {
e.preventDefault();

// Get the input element
const emailInput = document.querySelector('#email');

// Get the input value
const email = emailInput.value.trim();

// Send the reset password link to the email
// ...
alert('A reset password link has been sent to your email');
// Redirect the user to the login page
window.location.href = 'login.html';
});