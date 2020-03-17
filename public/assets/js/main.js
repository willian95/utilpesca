$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

var isNavbarOpen = false

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var position = $('#counter-stats').scrollTop()

  if (scroll >= position) {
      $('.counting').each(function () {
          var $this = $(this),
              countTo = $this.attr('data-count');

          $({
              countNum: $this.text()
          }).animate({
                  countNum: countTo
              },

              {

                  duration: 1000,
                  easing: 'linear',
                  step: function () {
                      $this.text(Math.floor(this.countNum));
                  },
                  complete: function () {
                      $this.text(this.countNum);
                      //alert('finished');
                  }

              });
      });
  }
});

// Font
$(document).ready(function () {
  WebFontConfig = {
    google: {
      families: ['Poppins:300,400,500,600,700', 'Roboto:400,500,700']
    }
  };
  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
});


// Menú fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
    $('.navbar-fixed-js').addClass('fixed');
    $('.nav-link').addClass('fixed-color');
    $('.navbar').addClass('navbar-bg');
    $("#iso").removeClass('img-size').attr('src', 'assets/img/swipe-bg.svg').removeClass('scroll-up');

  } else {
    $('.navbar-fixed-js').removeClass('fixed');
    $('.nav-link').removeClass('fixed-color');
    $('.navbar').removeClass('navbar-bg');
    $("#iso").addClass('img-size').attr('src', 'assets/img/swipe.svg').removeClass('scroll-up');


  }
});

function toggleSidebar(){
  alert("hey")
  if(!isNavbarOpen){
    openNavbar()
  }else{
    closeNavbar()
  }

}

function openNavbar(){

  $("#sidebar").addClass("sidebar-open")
  isNavbarOpen = true

}

function closeNavbar(){

  $("#sidebar").removeClass("sidebar-open")
  isNavbarOpen = false

}

$(".hamburger").on("click", function () {
  $(this).toggleClass("is-active");
});
