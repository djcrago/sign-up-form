let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');
let errorMessageContainer = document.querySelector('.errorMessageContainer');

let errorMessage = document.createElement('p');
errorMessage.style.cssText = 'color: red; font-size: 0.8rem;';
errorMessage.textContent = '* Passwords do not match'

password2.addEventListener('keyup', ()=> {
    if (password1.value === password2.value) {
        errorMessageContainer.removeChild(errorMessage);
    } else {
        errorMessageContainer.appendChild(errorMessage);
    }

});