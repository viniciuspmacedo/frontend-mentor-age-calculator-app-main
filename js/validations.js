const currentDate = new Date();
const labels = document.querySelectorAll('label');
const dayElement = document.querySelector('#day');

export function validateDateOfBirth(date) {

    labels.forEach(label => {
        label.style.color = 'grey';
    })

    dayElement.parentNode.querySelector('.error-message').textContent = "";


    if (date > currentDate) {
        labels.forEach(label => {
            label.style.color = 'red'
        })
        dayElement.parentNode.querySelector('.error-message').textContent = "Must be a valid date";
        return false;
    } else {
        return true;
    }
}

const errorTypes = [
    'valueMissing',
    'rangeOverflow',
    'rangeUnderflow'
]

const errorMessages = {
    day: {
        valueMissing: 'This field is required.',
        rangeOverflow: 'Must be a valid day.',
        rangeUnderflow: 'Must be a valid day.'
    },
    month: {
        valueMissing: 'This field is required.',
        rangeOverflow: 'Must be a valid month.',
        rangeUnderflow: 'Must be a valid month.'
    },
    year: {
        valueMissing: 'This field is required.',
        rangeOverflow: 'Must be in past.',
        rangeUnderflow: 'Must be over 1900.'
    }
}

export function validateFormFields(field) {
    let message = '';

    const errorElement = field.parentNode.querySelector('.error-message');
    const label = field.parentNode.querySelector('label')
    const validity = field.checkValidity();

    label.style.color = 'hsl(0, 1%, 44%)';
    field.setCustomValidity('');

    errorTypes.forEach(error => {
        if (field.validity[error]) {
            message = errorMessages[field.name][error];
        }
    })

    if (!validity) {
        errorElement.textContent = message;
        label.style.color = 'hsl(0, 100%, 67%)';
    } else {
        errorElement.textContent = '';
    }
}