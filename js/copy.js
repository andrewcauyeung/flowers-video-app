$(document).ready(function() {
  $(".copy-icon").click(function() {
    $(".copy-link").show();
    copyInput("copy-link");
  });
});

function copyInput(tag) {
  /* Get the text field */
  var copyText = $("." + tag);

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert(tag + "Copied Successfully");
}
