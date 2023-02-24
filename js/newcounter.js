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
console.log("form: " + form);

form.addEventListener("input", (event) => {
    let x=event.target;
    console.log(x.value.length);
    x.nextElementSibling.textContent = x.value.length;
});