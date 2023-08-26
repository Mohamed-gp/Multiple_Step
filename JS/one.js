//step two

let plans = document.querySelectorAll(".plans > div");

plans.forEach(function (e) {
  e.addEventListener("click", function () {
    plans.forEach(function (r) {
      r.classList.remove("active-plan");
    });
    e.classList.add("active-plan");
  });
});

let centerChild = document.querySelector(".child-circle");
let bonus = document.querySelectorAll(".bonus");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let price = document.querySelectorAll(".price");
let pVerief = 0;

let input = document.querySelectorAll("input");
let submit = document.querySelectorAll(".submit");
let required = document.querySelectorAll(".required");
submit.onclick = function (e) {
  let bool = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      required[i].classList.remove("hidden");
      input[i].classList.add("outline-add");
      console.log(input[i].classList);
      bool = false;
    } else {
      required[i].classList.add("hidden");
      input[i].classList.remove("outline-add");
    }
  }
  if (bool == false) {
    e.preventDefault();
  }
};


if (document.title == "Frontend Mentor | step 2") {
  yearly.onclick = function () {
    centerChild.classList.remove("left-1");
    centerChild.classList.add("right-1");
    monthly.classList.remove("left-1", "font-bold", "text-Marineblue");
    yearly.classList.add("left-1", "font-bold", "text-Marineblue");
    bonus.forEach(function (e) {
      e.classList.remove("hidden");
    });
    if (pVerief == 0) {
      price.forEach(function (e) {
        e.innerHTML = e.innerHTML.slice(0, -3) + "0" + e.innerHTML.slice(-3);
      });
      pVerief++;
    }
  };
  monthly.onclick = function () {
    centerChild.classList.remove("right-1");
    centerChild.classList.add("left-1", "font-bold", "text-Marineblue");
    yearly.classList.remove("left-1", "font-bold", "text-Marineblue");
    monthly.classList.add("left-1", "font-bold", "text-Marineblue");
    bonus.forEach(function (e) {
      e.classList.add("hidden");
    });
    if (pVerief == 1) {
      price.forEach(function (e) {
        e.innerHTML = e.innerHTML.slice(0, -4) + e.innerHTML.slice(-3);
      });
      pVerief--;
    }
  };
  
}


//playing with local storage

submit[1].onclick = function (e) {
  let activePlan = document.querySelector(".active-plan");
  localStorage.plan = activePlan.children[1].children[0].innerHTML;
  if (yearly.classList.contains("font-bold")) {
    localStorage.planType = "Yearly";
  } else {
    localStorage.planType = "Monthly";
  }
  localStorage.fixPrice = activePlan.children[1].children[1].innerHTML.slice(
    1,
    -3
  );
};

if (document.title == "Frontend Mentor | step 3") {
  let checkBox = document.querySelectorAll(".cards > div > :first-child");
  let prizes = document.querySelectorAll(".cards > div .three")
  if (localStorage.planType == "Yearly") {
    prizes.forEach(function(e){
      e.innerHTML = e.innerHTML.slice(0,-2) + "yr"
    })
  }
  else{
    prizes.forEach(function(e){
      e.innerHTML = e.innerHTML.slice(0,-2) + "mo"
    })

  }
  submit[1].onclick = function (e) {
    checkBox.forEach(function(e2,index){
      if (e2.checked == 1) {
        localStorage.setItem(e2.parentElement.children[1].children[0].innerHTML,e2.parentElement.children[2].innerHTML.slice(2,-3))
      }
      else{
        localStorage.setItem(e2.parentElement.children[1].children[0].innerHTML,undefined)
      }
    })
  };
}

// start finishing up
if (document.title == "Frontend Mentor | step 4") {
  let finalPlan = document.querySelector(".final-results .final-plan .one .one")
  finalPlan.innerHTML = `${localStorage.plan}(${localStorage.planType})`
  let fixPrice = document.querySelector(".final-results .final-plan > .two")

  let first = document.querySelector(".first")
  let second = document.querySelector(".second")
  let third = document.querySelector(".third")
  
  if (localStorage.planType == "Yearly") {
    fixPrice.innerHTML = `$${localStorage.fixPrice}/yr`
    first.children[1].innerHTML = first.children[1].innerHTML.slice(0,-2) + "yr"
    second.children[1].innerHTML = second.children[1].innerHTML.slice(0,-2) + "yr"
    third.children[1].innerHTML = third.children[1].innerHTML.slice(0,-2) + "yr"
    
  }
  else{
    fixPrice.innerHTML = `$${localStorage.fixPrice}/mo`
    first.children[1].innerHTML = first.children[1].innerHTML.slice(0,-2) + "mo"
    second.children[1].innerHTML = second.children[1].innerHTML.slice(0,-2) + "mo"
    third.children[1].innerHTML = third.children[1].innerHTML.slice(0,-2) + "mo"
  }


  if (localStorage["Online service"] == "undefined") {
    first.classList.add("hidden")
  }
  else{
    first.classList.remove("hidden")
  }
  if (localStorage["Larger storage"] == "undefined") {
    second.classList.add("hidden")
  }
  else{
    second.classList.remove("hidden")
  }
  if (localStorage["Customizable Profile"] == "undefined") {
    third.classList.add("hidden")
  }
  else{
    third.classList.remove("hidden")
  }
  let resultTitle = document.querySelector(".result .title")
  let total = document.querySelector(".result .total")
  resultTitle.innerHTML = `${resultTitle.innerHTML} (per ${localStorage.planType.slice(0,-2)})`
  if (localStorage["Online service"] == "undefined") {
    localStorage["Online service"] = 0
  }
  if (localStorage["Larger storage"] == "undefined") {
    localStorage["Larger storage"] = 0
  }
  if (localStorage["Customizable Profile"] == "undefined") {
    localStorage["Customizable Profile"] = 0
  }
  if (localStorage.planType == "Yearly") {
    total.innerHTML = `+$${Number(localStorage.fixPrice) + Number(localStorage["Online service"]) + Number(localStorage["Larger storage"]) + Number(localStorage["Customizable Profile"])}/yr`
  }
  else{
    total.innerHTML = `+$${Number(localStorage.fixPrice) + Number(localStorage["Online service"]) + Number(localStorage["Larger storage"]) + Number(localStorage["Customizable Profile"])}/mo`

  }
}
// end  finishing up



