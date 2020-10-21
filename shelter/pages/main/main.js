function myFunction() {
    document.getElementById("check").classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle("show");
}
document.addEventListener("click", function(e) {
    let m = document.getElementById('menu');
    let a = document.getElementById('backdrop');
    if (e.target.id != 'hmt' && e.target.id != 'menu') {
      m.style.display = 'none';
      a.style.display = 'none';
      m.style.right
    } else if (e.target.id == 'hmt') {
      m.style.display = (m.style.display != 'block') ? 'block' : 'none';
      a.style.display = (a.style.display != 'block') ? 'block' : 'none';
    }
  });