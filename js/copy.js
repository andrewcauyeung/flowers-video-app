function copyFunction(link) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(link).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Copied Successfully");
}

function copyInput(tag) {
  /* Get the text field */
  var copyText = $("." + tag);

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied Successfully");
}
