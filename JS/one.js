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





//step two 
let plans = document.querySelectorAll(".plans > div")

plans.forEach(function(e){
  e.addEventListener("click",function(){
    if (e.classList.contains("active-plan")) {
      
    }
    e.classList.add("active-plan")
  })
})