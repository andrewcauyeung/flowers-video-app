function openQRCamera(node) {
  var reader = new FileReader();
  reader.onload = function() {
    node.value = "";
    qrcode.callback = function(res) {
      if (res instanceof Error) {
        alert(
          "No QR code found. Please make sure the QR code is within the camera's frame and try again."
        );
      } else {
        var temp = res;
        alert("The Item ID is " + temp);
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}

function getVideo() {}

function autoFormat(value) {}
