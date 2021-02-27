// preload animation and set a delay time for text typing effect
$(window).one("load", function () {
  setInterval(function () {
    $(".loader-container").css("display", "none");
  }, 2000);
});

$(this)
  .delay(2500)
  .queue(function () {
    typeWriter();
    $(this).dequeue();
  });

//text typing effect
var i = 0;
var txt = "Hello, I am Ting Ju Yu. Are you looking for a Front End Developer?";

function typeWriter() {
  if (i < txt.length) {
    $(".text").append(txt.charAt(i));
    i++;
    setTimeout(typeWriter, 50);
  }
}

//menu effect
$(".menu").on("click", function (e) {
  $("ul").toggleClass("hidden");
  $(".bars").toggleClass("fa-bars fa-times");
  e.preventDefault();
});

$("ul li").on("click", function () {
  $("ul").toggleClass("hidden");
  $(".bars").toggleClass("fa-bars fa-times");
});

//scroll effect
function changeIcons() {
  const topOfFooter = $("#contact").offset().top;

  if (window.scrollY + window.innerHeight >= topOfFooter) {
    $("#icons").css("opacity", "0");
  } else {
    $("#icons").css("opacity", "1");
  }
}

window.addEventListener("scroll", changeIcons);