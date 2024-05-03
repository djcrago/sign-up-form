let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let errorMessage = document.querySelector('.errorMessage');

let error = document.createElement('p');
error.classList.toggle('error');
error.textContent = '* Passwords do not match';

confirmPassword.addEventListener('keyup', () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.appendChild(error);
  } else {
    errorMessage.removeChild(error);
  }
});
