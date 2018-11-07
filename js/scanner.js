$(document).ready(function() {
  var recorder = document.getElementById("recorder");
  var player = document.getElementById("player");
  var upload = document.getElementById("button");

  recorder.addEventListener("change", function(e) {
    var file = e.target.files[0];
    // Do something with the video file.
    player.src = URL.createObjectURL(file);
    if (player.src != "") {
      $(".video-container").show();
      $(".icon").hide();
      $(".icon-container").removeAttr("class");
      $(".video-info-bttn").prop("disabled", false);
      $(".video-info-bttn").click();
    }
  });

  $(".upload-trigger").click(function() {
    $(".upload-status-btn").prop("disabled", false);
    $(".upload-status-btn").click();
  });

  //Hide the video player onload
  $(".video-container").hide();

  $(".file-icon").click(function() {
    $(".video-container").show();
    $(".icons").hide();
  });
});

function triggerRecorder() {
  var player = document.getElementById("player");
  console.log(player.src);
  if (player.src == "") {
    $("#recorder").click();
  }
}
