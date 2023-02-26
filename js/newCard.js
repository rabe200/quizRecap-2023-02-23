const form2 = document.querySelector('[data-js="formular"]');

form2.addEventListener("submit", (event) => {
    Event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
});