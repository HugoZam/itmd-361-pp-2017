function ringDoorbell() {
  var doorbell = new Audio('media/doors-closing.mp3');
  doorbell.play();
}
$(document).ready(function() {
  $(".js").css('display', 'inline');
});
