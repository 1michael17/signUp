const dPasswordInput = document.getElementById('dPassword');
const confirmPassword = document.getElementById('confirmPassword');
const inputs = document.querySelectorAll('.inputs');
const showPass1 = document.getElementById('showPassword1')
const showPass2 = document.getElementById('showPassword2')

const passIcon = document.querySelector('.passIcon');
const aMatch = document.querySelector('.aMatch');
const sendBtn = document.querySelector('.toSend');
const backBtn = document.querySelector('.toBack');
const nextBtn = document.querySelector('.toNext');
const step1 = document.querySelector('#step1');
const step2 = document.querySelector('#step2');
const phoneInput = document.querySelector('#phone');

let allValid = true;

confirmPassword.addEventListener('input', () => { toMatchCheck() });
dPasswordInput.addEventListener('input', () => { toMatchCheck() });

sendBtn.addEventListener('click', () => { validity() });

nextBtn.addEventListener('click', () => {
    validity();
    if (allValid === true) {
        toStep(step1, step2);
        console.log('Working');
    }
});

backBtn.addEventListener('click', () => { toStep(step2, step1) });

phoneInput.addEventListener('input', () => {
    const value = phoneInput.value;
    if (/^\d{11}$/.test(value)) {
        phoneIcon.textContent = '✔️';
        phoneIcon.classList.add('valid');
        phoneIcon.classList.remove('invalid');
    } else {
        phoneIcon.textContent = '❌';
        phoneIcon.classList.add('invalid');
        phoneIcon.classList.remove('valid');
    }
});

/** *FIXED*/
function toMatchCheck() {
    if (dPasswordInput.value === '' || confirmPassword.value === '') {
        aMatch.style.display = "none";
    } else if (dPasswordInput.value === confirmPassword.value) {
        passIcon.textContent = '✔️';
    } else {
        passIcon.textContent = '❌';
    }
}

function toStep(currentElement, pastElement) {
    currentElement.style.display = 'none';
    pastElement.style.display = 'block';
}

/* * *FIXED */
function validity() {
    allValid = true; // reset before validation
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity();
            allValid = false;
        }
    });
}

const phoneIcon = document.getElementById('phone-icon');

/** * For password hide and visibility */

showPass1.addEventListener('change', () => {
    dPasswordInput.type = showPass1.checked ? 'text' : 'password';
});
showPass2.addEventListener('change', () => {
    confirmPassword.type = showPass2.checked ? 'text' : 'password';
});
