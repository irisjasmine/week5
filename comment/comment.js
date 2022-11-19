window.addEventListener("load", function () {
  var addButtonElement = document.querySelector("#addButton");
  var commentContainer = document.querySelector(".commentSection");
  var addCommentElement = document.querySelector("#addComment");
  addButtonElement.addEventListener("click", function () {
    var commentElement = createCommentElement(addCommentElement.value);
    commentContainer.appendChild(commentElement);
  });
});
function deleteCommentElement(event) {
  console.log(event.target.parentElement.parentElement);
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
}

function createCommentElement(textareaValue) {
  var div = document.createElement("div");
  div.classList.add("fixedComment");
  div.innerHTML =
    textareaValue +
    "<button onclick=deleteCommentElement(event)>Delete</button>";
  return div;
}

