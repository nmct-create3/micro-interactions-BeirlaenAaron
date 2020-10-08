let email = {},
    password = {},
    signInButton;

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const isValidPassword = function(fieldValue) {
    return fieldValue.length > 1;
}

const getDOMElements = function() {
    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    password.field = document.querySelector('.js-password-field');
    password.errorMessage = document.querySelector('.js-password-error-message');
    password.input = document.querySelector('.js-password-input');
    signInButton = document.querySelector('.js-sign-in-button');
}

const addErrors = function(formField, errorField, errorMessage) {
    formField.classList.add('has-error');
    errorField.style.display = 'block';
    errorField.innerHTML = errorMessage;
}

const removeErrors = function(formField, errorField) {
    formField.classList.remove('has-error');
    errorField.style.display = 'none';
}

const doubleCheckEmailAddress = function() {
    if (!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)) {
        removeErrors(email.field, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAddress);
    } else {
        addErrors(email.field, email.errorMessage, 'The email is incorrect');
    }
}

const doubleCheckPassword = function() {
    if (!isEmpty(password.input.value) && isValidPassword(password.input.value)) {
        removeErrors(password.field, password.errorMessage);
        password.input.removeEventListener('input', doubleCheckPassword);
    } else {
        addErrors(password.field, password.errorMessage, 'The password is invalid');
    }
}
 
const enableListeners = function() {
    email.input.addEventListener('blur', function() {
        if (isEmpty(email.input.value) && !isValidEmailAddress(email.input.value)) {
            addErrors(email.field, email.errorMessage, 'This field is required.');

            email.input.addEventListener('input', doubleCheckEmailAddress);
        } else {
            if (isEmpty(email.input.value)) {
                removeErrors(email.field, email.errorMessage);
                email.input.removeEventListener('input', doubleCheckEmailAddress);
            }
        }
    });

    password.input.addEventListener('blur', function() {
        if (isEmpty(password.input.value) && !isValidPassword(password.input.value)) {
            addErrors(password.field, password.errorMessage, 'This field is required.');

            password.input.addEventListener('input', doubleCheckPassword);
        } else {
            if (isEmpty(password.input.value)) {
                removeErrors(password.field, password.errorMessage);
                password.input.removeEventListener('input', doubleCheckPassword);
            }
        }
    });

    signInButton.addEventListener('click', function() {})
}

document.addEventListener('DOMContentLoaded', function() {
    console.info('DOM LOADED')
    getDOMElements();
    enableListeners();
})