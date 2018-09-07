var countDownDate = new Date("Oct 6, 2018 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days+"D" ;
    document.getElementById("hour").innerHTML = hours+"H";
    document.getElementById("min").innerHTML = minutes+"M" ;
    document.getElementById("sec").innerHTML = seconds+"S" ;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "EXPIRED";
    }
}, 1000);
    var speed1=200;
    var j=0;
$(document).ready(function(){

  typeWriter1();
});
function typeWriter1() {
var txt1 = 'Get ready for';
  if (j < txt1.length) {
    document.getElementById("quote").innerHTML += txt1.charAt(j);
    j++;
    setTimeout(typeWriter1, speed1);
  }
}


AOS.init({
        easing: 'ease-out-back',
        duration: 2000
       });
     
     

      $('.hero__scroll').on('click', function(e) {
        $('html, body').animate({
          scrollTop: $(window).height()
        }, 1200);
      });



//   $(document).ready( function() {
//     $('#myCarousel').carousel({
//     interval:   4000
//   });
  
// //   var clickEvent = false;
// //   $('#myCarousel').on('click', '.nav a', function() {
// //       clickEvent = true;
// //       $('.nav li').removeClass('active');
// //       $(this).parent().addClass('active');    
// //   }).on('slid.bs.carousel', function(e) {
// //     if(!clickEvent) {
// //       var count = $('.nav').children().length -1;
// //       var current = $('.nav li.active');
// //       current.removeClass('active').next().addClass('active');
// //       var id = parseInt(current.data('slide-to'));
// //       if(count == id) {
// //         $('.nav li').first().addClass('active');  
// //       }
// //     }
// //     clickEvent = false;
// //   });
// // });

 function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var slider = document.getElementById("demo");
var onScroll = debounce(function(direction) {
  //console.log(direction);
  if (direction == false) {
    $('.carousel-control-next').click();
  } else {
    $('.carousel-control-prev').click();
  }
}, 100, true);