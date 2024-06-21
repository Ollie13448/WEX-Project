// scripts.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var isValid = true;

    clearErrors();

    if (!validateEmail(email)) {
        showError('email', 'Invalid email format');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showError(fieldId, message) {
    var field = document.getElementById(fieldId);
    field.style.borderColor = 'red';
    var error = document.createElement('span');
    error.className = 'error';
    error.innerHTML = message;
    field.parentNode.insertBefore(error, field.nextSibling);
}

function clearErrors() {
    var errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.parentNode.removeChild(error);
    });

    var fields = document.querySelectorAll('input');
    fields.forEach(function(field) {
        field.style.borderColor = '';
    });
}
