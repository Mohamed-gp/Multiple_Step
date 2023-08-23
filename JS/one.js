//step two 
if (document.title == "Frontend Mentor | step 2" ) {
  let plans = document.querySelectorAll(".plans > div")
  
  plans.forEach(function(e){
    e.addEventListener("click",function(){
      plans.forEach(function(r){
        r.classList.remove("active-plan")
      })
      e.classList.add("active-plan")
    })
  })
  
  let centerChild = document.querySelector(".child-circle")
  let bonus = document.querySelectorAll(".bonus")
  let monthly = document.querySelector(".monthly")
  let yearly = document.querySelector(".yearly")
  yearly.onclick = function(){
    centerChild.classList.remove("left-1")
    centerChild.classList.add("right-1")
    monthly.classList.remove("left-1","font-bold","text-Marineblue")
    yearly.classList.add("left-1","font-bold","text-Marineblue")
    bonus.forEach(function(e){
      e.classList.remove("hidden")
    })
  }
  monthly.onclick = function(){
    centerChild.classList.remove("right-1")
    centerChild.classList.add("left-1","font-bold","text-Marineblue")
    yearly.classList.remove("left-1","font-bold","text-Marineblue")
    monthly.classList.add("left-1","font-bold","text-Marineblue")

    bonus.forEach(function(e){
      e.classList.add("hidden")
    })
  }
}


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





