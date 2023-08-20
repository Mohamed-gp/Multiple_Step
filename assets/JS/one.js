let input = document.querySelectorAll("input");
let submit = document.querySelector(".submit");
let required = document.querySelectorAll(".required");
submit.onclick = function (e) {
  let bool = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      required[i].classList.remove("hidden");
      input[i].classList.add("outline-add")
      console.log(input[i].classList)
      bool = false;
    } else {
      required[i].classList.add("hidden");
      input[i].classList.remove("outline-add")
    }
  }
  if (bool == false) {
    e.preventDefault();
  }
};





// submit.onclick = function (e) {
//   let bool = true;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].value == "") {
//       bool = false;
//     }
//     if (bool == false) {
//       e.preventDefault();
//     }
//   }
// };

//   for (let j = 0; j < input.length; j++) {
//     input[j].oninput = function () {
//       if (input[j].value == "") {
//         required[j].classList.remove("hidden");
//         input[j].classList.add("outline-add");
//         console.log(input[j].classList);
//       } else {
//         required[j].classList.add("hidden");
//         input[j].classList.remove("outline-add");
//       }
//     };
//   }