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

// auto change photos effect
const images = ["images/projects/floral.jpg", "images/projects/florist.jpg"];

const images2 = ["images/projects/sealife.jpg", "images/projects/aquarium.jpg"];

const images3 = ["images/projects/travel.jpg", "images/projects/norway.jpg"];

const images4 = ["images/projects/film.jpg", "images/projects/film_cover.jpg"];

var current = 0;
var then = 0;

setInterval(function () {
  $(".project_img").attr("src", images[current]);
  current = current < images.length - 1 ? current + 1 : 0;

  $(".project_img2").attr("src", images2[current]);
  current = current < images2.length - 1 ? current + 1 : 0;

  $(".project_img3").attr("src", images3[current]);
  current = current < images3.length - 1 ? current + 1 : 0;

  $(".project_img4").attr("src", images4[then]);
  then = then < images4.length - 1 ? then + 1 : 0;
}, 3000); /*1000 = 1 sec*/
