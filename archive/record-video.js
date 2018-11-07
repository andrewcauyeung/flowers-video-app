$(document).ready(function() {
  var recorder = document.getElementById("recorder");
  var player = document.getElementById("player");
  var upload = document.getElementById("button");

  recorder.addEventListener("change", function(e) {
    var file = e.target.files[0];
    saveVideo(file);

    console.log(file);
  });
});

function saveVideo(video) {
  //   var data = {
  //     Video: video
  //   };

  //   data = JSON.stringify(data);

  //   data = btoa(data);

  localStorage.setItem("data", video);

  console.log(video);

  alert(video, " is stored");

  $(location).attr("href", "http://localhost:8000/response.html");
}

function clickVideo() {
  document.getElementById("recorder").click();

  return true;
}
