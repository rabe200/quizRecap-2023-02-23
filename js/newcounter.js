const form = document.querySelector('[data-js="formular"]');
const formUL = document.querySelector('[data-js="formUL"]');

form.addEventListener("input", (event) => {
    let x=event.target;
    let y = x.getAttribute('maxlength');
    if (x != document.querySelector('[data-js="form_tag"]')) {
    x.nextElementSibling.textContent = y - x.value.length;}
});

///new Card build

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    newCard(data);
    event.target.form_question.focus();
    form.reset();
});

const newCard = (data) => {
    const cardListItem = document.createElement("li");
    const cardItem = document.createElement("article");
    const cardItemQuestion = document.createElement("h2");
    const cardItemButton = document.createElement("button");
    const cardItemAnswer = document.createElement("p");
    const cardItemTagList = document.createElement("ul");
    const cardItemTagListItem = document.createElement("li");
    const cardItemButtonBookmark = document.createElement("button");

    console.log(cardListItem,cardItem,cardItemButton,cardItemAnswer,cardItemTagList,cardItemTagListItem,cardItemQuestion,cardListItem,cardItemButtonBookmark);

    cardListItem.classList.add("cardList");
    cardItem.classList.add("card");
    cardItemQuestion.classList.add("card__question")
    cardItemButton.classList.add("card__button-answer");
    cardItemAnswer.classList.add("card__answer");
    cardItemTagList.classList.add("card__tag-list");
    cardItemTagListItem.classList.add("card__tag-list-item");
    cardItemButtonBookmark.classList.add("card__button-bookmark");

    console.log("classLists added to createdElements");

    cardItemQuestion.textContent = data.question;
    cardItemAnswer.textContent = data.answer;
    cardItemButton.textContent = "Show answer";
    cardItemButton.type = "button";
    cardItemTagList.textContent = data.tag;

    console.log("textContent set for: cardItemQuestion, cardItemAnswer, cardItemButton, cardItemTagList");
    console.log("initializing textContentCheck:")

    cardItemButton.addEventListener("click", () => 
    {

        if (cardItemAnswer.classList.contains("card__answer") === false) {
            cardItemButton.textContent = "Show Answer";
          } else {
            cardItemButton.textContent = "Hide Answer";
          }
          cardItemAnswer.classList.toggle("card__answer");
          
    });

    console.log(cardItemQuestion.textContent, cardItemAnswer.textContent, cardItemButton.textContent, cardItemTagList.textContent);
    console.log("check successful");
    formUL.append(cardListItem);
    cardListItem.append(cardItem);
    cardItem.append(cardItemQuestion);
    cardItem.append(cardItemAnswer);
    cardItem.append(cardItemButton);
    cardItem.append(cardItemButtonBookmark);
    cardItem.append(cardItemTagList);
    cardItem.append(cardItemTagListItem);


 }