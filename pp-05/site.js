function ringDoorbell() {
  var doorbell = new Audio('media/doors-closing.mp3');
  doorbell.play();
}
function PressD(e) {
  var keyCode = e.keyCode;
  if(keyCode === 68){
    ringDoorbell();
  }
}
$(document).ready(function() {
  $(".js").css('display', 'inline');
});
//addEventListene
document.getElementById('doorbell').addEventListener("click", ringDoorbell);
window.addEventListener("keydown", PressD);
