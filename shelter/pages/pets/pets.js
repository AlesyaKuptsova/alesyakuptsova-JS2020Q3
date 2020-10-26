var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("button_paginator");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
document.addEventListener("click", function(e) {
  let m = document.getElementById('menu');
 if (e.target.id == 'hmt' && e.target.id != 'menu') {
    m.style.display = (m.style.display != 'block') ? 'block' : 'none';
  }
});
var dialog = document.querySelector('dialog');
document.querySelector('#Katrine').onclick = function() {
  dialog.showModal();
};
document.querySelector('#close').onclick = function() {
  dialog.close();
};

var dialogone = document.getElementById('dialog');
document.querySelector('#Jennifer').onclick = function() {
  dialogone.showModal();
};
document.querySelector('#close_two').onclick = function() {
  dialogone.close();
};
var dialogtwo = document.getElementById('dialogthree');
document.querySelector('#Woody').onclick = function() {
  dialogtwo.showModal();
};
document.querySelector('#close_three').onclick = function() {
  dialogtwo.close();
};
var dialogthree = document.getElementById('dialogtwoody768');
document.querySelector('#woody_768').onclick = function() {
  dialogthree.showModal();
};
document.querySelector('#close_woody768').onclick = function() {
  dialogthree.close();
};
var dialogfour = document.getElementById('dialogjennifer768');
document.querySelector('#jennifer768').onclick = function() {
  dialogfour.showModal();
};
document.querySelector('#close_jennifer768').onclick = function() {
  dialogfour.close();
};
var dialogfive = document.getElementById('dialogkatrine768');
document.querySelector('#katrine768').onclick = function() {
  dialogfive.showModal();
};
document.querySelector('#close_katrine768').onclick = function() {
  dialogfive.close();
};
var dialogsix = document.getElementById('dialogsophia768');
document.querySelector('#sophia768').onclick = function() {
  dialogsix.showModal();
};
document.querySelector('#close_sophia768').onclick = function() {
  dialogsix.close();
};
var dialogseven = document.getElementById('dialogtimmy768');
document.querySelector('#timmy768').onclick = function() {
  dialogseven.showModal();
};
document.querySelector('#close_timmy768').onclick = function() {
  dialogseven.close();
};
var dialogeight = document.getElementById('dialogcharly768');
document.querySelector('#charly768').onclick = function() {
  dialogeight.showModal();
};
document.querySelector('#close_charly768').onclick = function() {
  dialogeight.close();
};
var dialognine = document.getElementById('dialogkatrine1280');
document.querySelector('#katrine1280').onclick = function() {
  dialognine.showModal();
};
document.querySelector('#close_katrine1280').onclick = function() {
  dialognine.close();
};
var dialogten = document.getElementById('dialogjennifer1280');
document.querySelector('#jennifer1280').onclick = function() {
  dialogten.showModal();
};
document.querySelector('#close_jennifer1280').onclick = function() {
  dialogten.close();
};
var dialogw = document.getElementById('dialogtwoody1280');
document.querySelector('#woody1280').onclick = function() {
  dialogw.showModal();
};
document.querySelector('#close_woody1280').onclick = function() {
  dialogw.close();
};
var dialogsof = document.getElementById('dialogsophia1280');
document.querySelector('#sophia1280').onclick = function() {
  dialogsof.showModal();
};
document.querySelector('#close_sophia1280').onclick = function() {
  dialogsof.close();
};
var dialogtim = document.getElementById('dialogtimmy1280');
document.querySelector('#timmy1280').onclick = function() {
  dialogtim.showModal();
};
document.querySelector('#close_timmy1280').onclick = function() {
  dialogtim.close();
};
var dialogs = document.getElementById('dialogcharly1280');
document.querySelector('#charly1280').onclick = function() {
  dialogs.showModal();
};
document.querySelector('#close_charly1280').onclick = function() {
  dialogs.close();
};
var dialogsc = document.getElementById('dialogscarlett1280');
document.querySelector('#scarlett1280').onclick = function() {
  dialogsc.showModal();
};
document.querySelector('#close_scarlett1280').onclick = function() {
  dialogsc.close();
};
var dialogfre = document.getElementById('dialogfreddie1280');
document.querySelector('#freddie1280').onclick = function() {
  dialogfre.showModal();
};
document.querySelector('#close_freddie1280').onclick = function() {
  dialogfre.close();
};