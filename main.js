let intro = document.getElementById("intro");
let changeText = document.getElementById("changeText");
let changeSizeMore = document.getElementById("changeSizeMore");
let changeSizeLess = document.getElementById("changeSizeLess");
let changeColor = document.getElementById("changeColor");
let changeBackground = document.getElementById("changeBackground");
let ChangeImage = document.getElementById("ChangeImage");

let text = "hello";
let FontSize = 1;

function changeTextFun() {
  intro.innerText = text;
}

function changeSizeMoreFun() {
  FontSize += 2 + "px";
}
