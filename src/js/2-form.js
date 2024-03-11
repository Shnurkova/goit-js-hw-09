const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageTextarea = document.querySelector("textarea");

function formSubmitHandler(event) {
    event.preventDefault();
    
    if (emailInput.value.trim() === "" || messageTextarea.value.trim() === "") {
        return alert(`All form fields must be filled in`);
    } else {
        localStorage.removeItem(STORAGE_KEY);
    }

    const email = emailInput.value.trim();
    const text = messageTextarea.value.trim();
    const data = JSON.stringify({ email, text });
    
    localStorage.setItem(STORAGE_KEY, data);

    const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
    try {
        const savedData = JSON.parse(jsn);
        console.log(savedData);
        messageTextarea.value = savedData.text;
        emailInput.value = savedData.email;
    } catch {
        console.log("No saved data!");
    };

    event.currentTarget.reset();
}

window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    localStorage.getItem(STORAGE_KEY);
});

form.addEventListener('submit', formSubmitHandler);
