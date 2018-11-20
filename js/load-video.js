function load_video(target, source) {
  $(target).load(source);
}

function change_video(target, source) {
  $(target).attr("src", source);
  $("#player")[0].load();
}
