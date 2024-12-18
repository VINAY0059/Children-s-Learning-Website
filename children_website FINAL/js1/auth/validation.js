document.addEventListener('DOMContentLoaded', () => {
    // Login Form Validation
    const loginForm = document.querySelector('#loginForm form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        if (validateLogin(username, password)) {
            // Here you would typically make an API call to your backend
            console.log('Login successful!');
            // Redirect to main application
            // window.location.href = '/dashboard.html';
        }
    });

    // Register Form Validation
    const registerForm = document.querySelector('#registerForm form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const age = document.getElementById('registerAge').value;
        
        if (validateRegistration(username, password, age)) {
            // Here you would typically make an API call to your backend
            console.log('Registration successful!');
            // Switch to login form
            switchForm('login');
        }
    });
});

function validateLogin(username, password) {
    if (username.length < 3) {
        alert('Username must be at least 3 characters long');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    return true;
}

function validateRegistration(username, password, age) {
    if (username.length < 3) {
        alert('Username must be at least 3 characters long');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    if (age < 4 || age > 12) {
        alert('Age must be between 4 and 12');
        return false;
    }
    return true;
}