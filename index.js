// phew… not a lot going on here. Please add some code!

const bookmark = document.querySelector('.bookmark');
console.log("bookmark: " + bookmark.innerHTML);

bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark--active");
    console.log("<-- bookmark clicked!!! --...>");
});