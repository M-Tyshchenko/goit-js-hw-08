import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const formInput = document.querySelector('input');

const LOCALSTORAGE_KEY = "feedback-form-state";

let formDataObj = {};

formOutput();

form.addEventListener('input', throttle(onFormInput, 500))
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();    
    formOutput();
    form.reset();  
    localStorage.removeItem(LOCALSTORAGE_KEY);
    formDataObj = {};
}

function onFormInput(event) {
    formDataObj[event.target.name] = event.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDataObj));
}

function formOutput() {
    let formMessageOutput = localStorage.getItem(LOCALSTORAGE_KEY) ;
        
    if (formMessageOutput) { 
        formMessageOutput = JSON.parse(formMessageOutput);        
        console.log(formMessageOutput);
        
        Object.entries(formMessageOutput).forEach(([name, value]) => {  
            formDataObj[name] = value;
            form.elements[name].value = value;
        });
    }
}