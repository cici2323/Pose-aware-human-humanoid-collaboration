$(document).ready(function () {
  // Toggle the mobile navbar menu, if a navbar is present.
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
