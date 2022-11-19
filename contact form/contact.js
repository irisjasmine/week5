function validateField() {
  var btn = document.querySelector(".submit");
  btn.addEventListener("click", onButtonClick);
  function onButtonClick(event) {
    event.preventDefault();
    var firstname = document.querySelector("#firstname");
    var lastName = document.querySelector("#lastname");
    var male = document.querySelector("#male");
    var female = document.querySelector("#female");
    var message = document.querySelector("[name='yourMessage']");
    if (firstname.value === "") {
      firstname.style.border = "solid 2px red";
    } else {
      firstname.style.border = "solid 1px black";
    }
    if (lastName.value === "") {
      lastName.style.border = "solid 2px red";
    } else {
      lastName.style.border = "solid 1px black";
    }
    if (male.value === "") {
      male.style.border = "solid 2px red";
    } else {
      male.style.border = "solid 1px black";
    }
    if (female.value === "") {
      female.style.border = "solid 2px red";
    } else {
      female.style.border = "solid 1px black";
    }
    if (message.value === "") {
      message.style.border = "solid 2px red";
    } else {
      message.style.border = "solid 1px black";
    }
  }
}
