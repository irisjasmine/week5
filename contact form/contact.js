var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var text_area = document.getElementById("text_area");
var submit = document.getElementById("myBtn");
submit.addEventListener("click", function(event) {
  event.preventDefault();
  if (fname.value === "") {
    return;
  }
  if (lname.value === "") {
    return;
  }
  if (text_area.value === "") {
    return;
  }
  displayBanner();
  console.log("First Name is: " + lname.value);
  console.log("Last Name is: " + fname.value);
  console.log("Your message is: " + text_area.value);
});
function checkForm() {
  if (fname.value === "") {
    fname.style.borderColor = "red";
  }
  if (lname.value === "") {
    lname.style.borderColor = "red";
  }
  if (text_area.value === "") {
    text_area.style.borderColor = "red";
  }
}

submit.addEventListener("click", checkForm, true);

function removeError() {
  if (fname.value !== "") {
    fname.style.borderColor = "unset";
  }
  if (lname.value !== "") {
    lname.style.borderColor = "unset";
  }
  if (text_area.value !== "") {
    text_area.style.borderColor = "unset";
  }
}

fname.addEventListener("keydown", removeError);
lname.addEventListener("keydown", removeError);
text_area.addEventListener("keydown", removeError);

function displayBanner() {
  var parent = document.getElementById("form");
  var banner = document.createElement("span");
  var text = document.createTextNode(
    "Thank you for contacting us, " + fname.value + "!"
  );

  banner.appendChild(text);
  parent.insertBefore(banner, parent.childNodes[0]);
  banner.classList.add("ban");
  var newSpan = document.createElement("span");
  newSpan.innerHTML = "&times;";
  banner.appendChild(newSpan);
  newSpan.classList.add("closebtn");
  newSpan.addEventListener("click", function() {
    banner.style.display = "none";
  });
}
