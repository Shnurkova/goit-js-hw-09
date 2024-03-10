const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

function formSubmitHandler(event) {
    event.preventDefault();
    
    if (input.value.trim() === "" || textarea.value.trim() === "") {
        return alert(`All form fields must be filled in`);
    } else {
        localStorage.removeItem(STORAGE_KEY);
    }

    const email = input.value.trim();
    const text = textarea.value.trim();
    const data = JSON.stringify({ email, text });
    console.log(data);
    localStorage.setItem(STORAGE_KEY, data);

    event.currentTarget.reset();
}

form.addEventListener('submit', formSubmitHandler);

const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
try {
const data = JSON.parse(jsn);
console.log(data);
textarea.value = data.text;
form.elements.email.value = data.email;
} catch {
    console.log("No save data!")
};
