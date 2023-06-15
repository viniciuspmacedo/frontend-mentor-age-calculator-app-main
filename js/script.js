import calculateAge from "./calculateAge.js";
import { validateDateOfBirth, validateFormFields } from "./validations.js";
import { showAge } from "./showResults.js";

const form = document.querySelector('form');
const formFields = document.querySelectorAll('[required]');

const yearElement = document.querySelector('#year');
const dayElement = document.querySelector('#day');
const monthElement = document.querySelector('#month');

//create a validation for year getting current year
yearElement.setAttribute('max', new Date().getFullYear);

formFields.forEach(field => {
    field.addEventListener('blur', () => validateFormFields(field));
    field.addEventListener('invalid', e => e.preventDefault())
})

form.addEventListener('submit', (event) => {
    const dateOfBirth = new Date(yearElement.value, monthElement.value - 1, dayElement.value);
    event.preventDefault();
    if(validateDateOfBirth(dateOfBirth)){
        showAge(calculateAge(dateOfBirth))
    }
    
}
)
