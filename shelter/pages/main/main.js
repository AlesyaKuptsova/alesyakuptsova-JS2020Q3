document.addEventListener("click", function(e) {
    let m = document.getElementById('menu');
    if (e.target.id == 'hmt' && e.target.id != 'menu') {
      m.style.display = (m.style.display != 'block') ? 'block' : 'none';
    }
  });
var dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
  dialog.showModal();
};
document.querySelector('#close').onclick = function() {
  dialog.close();
};

var dialogone = document.getElementById('dialog');
document.querySelector('#show_two').onclick = function() {
  dialogone.showModal();
};
document.querySelector('#close_two').onclick = function() {
  dialogone.close();
};
var dialogtwo = document.getElementById('dialogthree');
document.querySelector('#show_three').onclick = function() {
  dialogtwo.showModal();
};
document.querySelector('#close_three').onclick = function() {
  dialogtwo.close();
};
