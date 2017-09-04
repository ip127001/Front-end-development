var z =document.getElementById('login_form');
window.onclick = function(event) {
  if(event.target == z){
    z.style.display = 'none';
  }
}
var model = document.getElementById('profile_card');
window.onclick = function(event) {
  if(event.target == model) {
    model.style.display = 'none';
  }
}