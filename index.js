// phew… not a lot going on here. Please add some code!

const bookmark = document.querySelectorAll('.bookmark');
console.log("bookmark: " + bookmark.innerHTML);

// counter form.html

const count_question = document.querySelector('[data-js="form_question"]');
console.log(count_question.value);
const count_answer = document.querySelector('[data-js="form_answer"]');
console.log(count_answer.value);


let a = 150;
// let b = 150;

count_question.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "Backspace") {
        console.log("<< --- >>")
        if (a===150) {return;}
        else
        return a++;
    }
    else { 
        console.log("<< ++++ >>")
    return a--;}
    });

let output_counter_question = document.querySelector('[data-js="output_counter_question"]');
console.log("output_counter_question: " + output_counter_question.value);

count_question.addEventListener("keyup", () =>{
    console.log("output_counter_question: " + output_counter_question.value)
return output_counter_question.textContent=a;
});

count_answer.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "Backspace") {
        console.log("<< --- >>")
        if (a===150) {return;}
        else
        return a++;
    }
    else { 
        console.log("<< ++++ >>")
    return a--;}
    });

let output_counter_answer = document.querySelector('[data-js="output_counter_answer"]');
console.log("output_counter_answer: " + output_counter_answer.value);

count_answer.addEventListener("keyup", () =>{
    console.log("output_counter_answer: " + output_counter_answer.value)
return output_counter_answer.textContent=a;
});



