$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  var typed = new Typed(".typing-2", {
    strings: ["Student", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
