// const input1 = document.querySelector('[data-js="form_question"]');
// let output1 = document.querySelector('[data-js="output_counter_question"]');
// let maxlength = input1.getAttribute('maxlength');
// console.log(maxlength);
// console.log(input1.value);
// console.log(output1);





// input1.addEventListener("input", () => {
//     let x = input1.value.length;
//     console.log(x);
//     output1.textContent=x;
// })

const form = document.querySelector('[data-js="formular"]');
// console.log("form: " + form);

form.addEventListener("input", (event) => {
    let x=event.target;
    let y = x.getAttribute('maxlength');
    // let z = y-x.value.length;
    // console.log("y - x:   " +  y + "  " +  x.value.length + " = " + z);
    x.nextElementSibling.textContent = y - x.value.length;
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const textInput = event.target.textContent;
    console.log(textInput);
});