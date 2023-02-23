const count_question = document.querySelector('[data-js="form_question"]');
const count_answer = document.querySelector('[data-js="form_answer"]');

let a = 150;

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

count_question.addEventListener("keyup", () =>{
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

count_answer.addEventListener("keyup", () =>{
return output_counter_answer.textContent=a;
});