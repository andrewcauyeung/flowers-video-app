$(document).ready(function() {
  var recorder = document.getElementById("recorder");
  var player = document.getElementById("player");
  var upload = document.getElementById("button");
  var uploader = document.getElementById("uploader");

  recorder.addEventListener("change", function(e) {
    var file = e.target.files[0];
    console.log(file);
    // Do something with the video file.
    player.src = URL.createObjectURL(file);
    // $(".record-trigger").hide();
    // $(".video-info").show();
  });

  upload.addEventListener("click", function(e) {
    $("g-signin").click();
    $(".upload").show();
  });
  loadVideo(player);
  $(".upload").hide();
});

function loadVideo(player) {
  var video = localStorage.getItem("data");
  console.log(video);
  if (!video) return false;
  localStorage.removeItem("data");
  //   video = atob(video);
  //   video = JSON.parse(video);
  //   $("#recorder").val(video);
  //   console.log($("#recorder").get(0).files[0]);
  player.src = URL.createObjectURL(video);
}
