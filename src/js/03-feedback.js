import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const formInput = document.querySelector('input');

const LOCALSTORAGE_KEY = "feedback-form-state";

const formDataObj = {};

const formMessageOutput = localStorage.getItem(LOCALSTORAGE_KEY);
const parsedFormMessage = JSON.parse(formMessageOutput);

formOutput();

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.log(parsedFormMessage);
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    
}

function onFormInput(event) {
    formDataObj[event.target.name] = [event.target.value];

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDataObj));
}

function formOutput() {
    if (formMessageOutput) { 
       
        formInput.value = parsedFormMessage.email;
        textarea.value = parsedFormMessage.message;
    }

}