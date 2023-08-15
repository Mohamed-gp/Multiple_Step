let input = document.querySelectorAll("input");
let submit = document.querySelector(".submit");
let required = document.querySelectorAll(".required");
submit.onclick = function (e) {
  let bool = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      required[i].classList.remove("hidden");
      input[i].classList.add(".outline-add")
      bool = false;
    } else {
      required[i].classList.add("hidden");
    }
  }
  if (bool == false) {
    e.preventDefault();
  }
};
