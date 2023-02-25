
// phew… not a lot going on here. Please add some code!

const bookmark = document.querySelector('.bookmark');
console.log("bookmark: " + bookmark.innerHTML);


bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
    console.log("<-- bookmark clicked!!!! --...>");
});

const answer = document.querySelector('.card__button-answer');
console.log("card: " + answer.innerHTML);
const card__answer=document.querySelector('.card__answer');

answer.addEventListener("click", () => {
    
    console.log("<--- show answer clicked --->");
    
    if (card__answer.classList.contains("card__answer--active"))
 {   console.log("hidden answer");    
    answer.textContent = "Show answer";
}
    else {
        console.log("Displayed answeer");
answer.textContent ="Hide answer" ;
console.log(answer)}

    

    card__answer.classList.toggle("card__answer--active");
});