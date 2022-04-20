// ! Select elements

let myButton = document.querySelector(".btn");
let myDiv = document.querySelector(".mydiv");

let myColors = ["red", "green", "blue", "black", "yellow"];
let i = 0;

myButton.addEventListener("click", function () {
  myDiv.style.backgroundColor = myColors[i];
  i++;

  if (i === myColors.length) {
    i = 0;
  }
});
