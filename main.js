var todoListBtnCheck = document.getElementById("card_add_btn");
todoListBtnCheck.addEventListener("click", (e) => {
  e.preventDefault();
  todoListBtnCheck.style.textDecorationStyle = "strike";
});
if ("content" in document.createElement("template")) {
  // template support verification
  console.log("✔️ creating template is supported by your browser!");

  const cardList = document.querySelector(".card__list");
  const listTemplate = document.querySelector("#itemTemplate");
  const clone = listTemplate.content.cloneNode(true);

  todoListBtnCheck.addEventListener("click", (e) => {
    console.log("clicked");
    cardList.appendChild(clone);
  });
}
