var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("button_paginator");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function myFunction() {
  document.getElementById("check").classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}