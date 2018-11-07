$(document).ready(function() {
  $(".navigation-container").load("/components/navigation.html", function() {
    if (
      $("title")
        .text()
        .includes("Home")
    ) {
      $(".navbar").removeClass("navbar-dark");
      $(".navbar").addClass("navbar-light");
      $(".logo").attr("src", "/images/logo.jpg");
    }
  });
});
