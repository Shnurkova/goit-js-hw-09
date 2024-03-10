const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");

function formSubmitHandler(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const text = textarea.value;
    const data = JSON.stringify({ email, text });
    console.log(data);
    localStorage.setItem(STORAGE_KEY, data);
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
