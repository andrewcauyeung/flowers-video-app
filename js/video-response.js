var recorder_file;
$(document).ready(function() {
  load_video(".video-container", "/components/recieved-video.html");
  load_section(".section-1", "/components/message.html", respondHandler);
  load_section(".section-2", "/components/say-thank-you.html", setupCart);

  // appendComponent("/components/shopping-cart.html", ".modal-container", empty);
  appendComponent("/components/share-modal.html", ".modal-container", empty);
});

function empty() {}

function load_section(target, component, callback) {
  var call_func = callback;
  $(target).load(component, call_func);
}

function switch_section(target, component, func) {
  $.get(component, function(data) {
    $(target).replaceWith(data);

    if (typeof func === "function") {
      func();
    }
  });
}

function onClickHandler(target, func) {
  $(target).click(function() {
    func();
  });
}

//APPEND SHOPPING CART
function setupCart() {
  appendComponent(
    "/components/shopping-cart.html",
    ".modal-container",
    checkboxHandler
  );
}

//CHECKBOX HANDLER
function checkboxHandler() {
  $(".custom-checkbox").each(function(index) {
    $(this).change(function() {
      if ($(this).is(":checked")) {
        $("#shoppingCartModal").modal("show");
        // alert("Added to Cart");
      }
    });
  });
}

//UPLOAD HANDLDER
function setupUpload() {
  $(".video-info-bttn").click();

  $(".upload-trigger").click(function() {
    $(".upload-status-btn").prop("disabled", false);
    $(".upload-status-btn").click();
  });

  $.getScript("/js/upload_video.js", function() {
    $.getScript("//apis.google.com/js/client:plusone.js");
    $.getScript("/js/cors_upload.js");
  });
}

//RESPONSE BUTTON HANDLER
function respondHandler() {
  $("#recorder").change(function(e) {
    var file = e.target.files[0];
    recorder_file = file;
    var object = URL.createObjectURL(file);
    // Do something with the video file.
    change_video("#player source", object);
    switch_section(
      ".section-1 div",
      "/components/personalize.html",
      setupUpload
    );
  });

  $(".respond-btn").click(function() {
    $("#recorder").click();
  });
}

function appendComponent(source, target, callback) {
  $.get(source, function(data) {
    $(target).append(data);
    callback();
  });
}
