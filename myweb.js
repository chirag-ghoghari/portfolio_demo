$(window).on('load',function(){
  $('.loader-main').fadeOut(3000);
  });
// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// $(document).ready(function () {
//   $(window).scroll(function () {
//     $(".main").css({
//       top: "0px",
//       position: "sticky",
//     });
//   });
// });

$(document).ready(function () {
  $(".big-display i").click(function () {
    $(".small-list-item").css({
      right: "0%",
    });
  });
});

$(document).ready(function () {
  $(".small-display i").click(function () {
    $(".small-list-item").css({
      right: "-50%",
    });
  });
});
// $(document).ready(function () {
//   $(".big-display i").click(function () {
//     $(".small-list-item").show(500);
//   });
// });
// $(document).ready(function () {
//   $(".small-display i").click(function () {
//     $(".small-list-item").hide(200);
//   });
// });

  $(window).on('scroll',function(){
   if($(window).scrollTop()){
    $('.main').addClass('color-change');
   }
   else{
    $('.main').removeClass('color-change');
   }
  });

$(document).ready(function () {
  $("#fornt").click(function () {
    $("#tech-img-1").attr("src", "web-img/html.png"),
      $(".logo-name-1").text("html");
    $("#tech-img-2").attr("src", "web-img/css.png"),
      $(".logo-name-2").text("css");
    $("#tech-img-3").attr("src", "web-img/java scrip.png"),
      $(".logo-name-3").text("javasript");
    $("#tech-img-4").attr("src", "web-img/bootrap.png"),
      $(".logo-name-4").text("boostrap");
  });
});
$(document).ready(function () {
  $("#back").click(function () {
    $("#tech-img-1").attr("src", "web-img/shopify.png"),
      $(".logo-name-1").text("shpoify");
    $("#tech-img-2").attr("src", "web-img/java.png"),
      $(".logo-name-2").text("java");
    $("#tech-img-3").attr("src", "web-img/php.png"),
      $(".logo-name-3").text("php");
    $("#tech-img-4").attr("src", "web-img/python.png"),
      $(".logo-name-4").text("python");
  });
});
$(document).ready(function () {
  $("#db").click(function () {
    $("#tech-img-1").attr("src", "web-img/mysql.png"),
      $(".logo-name-1").text("mysql");
    $("#tech-img-2").attr("src", "web-img/mongodb.png"),
      $(".logo-name-2").text("mongodb");
    $("#tech-img-3").attr("src", "web-img/posrgre.png"),
      $(".logo-name-3").text("posrge");
    $("#tech-img-4").attr("src", "web-img/pngwing.com.png"),
      $(".logo-name-4").text("SQL lite");
  });
});
$(document).ready(function () {
  $("#fream").click(function () {
    $("#tech-img-1").attr("src", "web-img/word-press.png"),
      $(".logo-name-1").text("word press");
    $("#tech-img-2").attr("src", "web-img/laravel.png"),
      $(".logo-name-2").text("laravel");
    $("#tech-img-3").attr("src", "web-img/bootrap.png"),
     $(".logo-name-3").text("boostrap");
    $("#tech-img-4").attr("src", "web-img/jquery2.png"),
      $(".logo-name-4").text("jQuery");
  });
});

AOS.init({
  offset: 400,
  delay: 1,
  duration: 600,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",  
});



