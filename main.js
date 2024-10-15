var todoListBtnCheck = document.getElementById("toDoList_1");
todoListBtnCheck.addEventListener("click", (e) => {
  e.preventDefault();
  window.alert("clicked");
  todoListBtnCheck.style.textDecorationStyle = "strike";
});
