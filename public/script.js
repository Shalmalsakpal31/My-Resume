console.log("Hello from js");
let typing =  document.querySelector("header .user #post")
// console.log(typing);
let arr = "Web-Developer";
let index = 0;
const typewriter = () => {
      let newtext = arr.slice(0,index)
      typing.innerHTML = newtext;
      // console.log(newtext);
      index > arr.length ? index = 0 : index++
      
      setTimeout(() => typewriter(), 300)
}
typewriter();


// $(document).ready(function () {

//   $('#menu').click(function () {
//     $(this).toggleClass('fa-times');
//     $('header').toggleClass('toggle');
//   });

//   $(window).on('scroll load', function () {

//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');

//     if ($(window).scrollTop() > 0) {
//       $('.top').show();
//     } else {
//       $('.top').hide();
//     }

//   });

//   $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault();

//     $('html, body').animate({
//       scrollTop: $($(this).attr('href')).offset().top,

//     },
//       500,
//       'linear'
//     );
//   });

// });


  // chatgpt code 
  // document.addEventListener('DOMContentLoaded', function () {

    // When the element with ID 'menu' is clicked
    document.getElementById('menu').addEventListener('click', function () {
      this.classList.toggle('fa-times'); // Toggle the 'fa-times' class on the clicked element
      document.querySelector('header').classList.toggle('toggle'); // Toggle the 'toggle' class on the header
    });
  
    // Function to handle scroll and load events
    function onScrollOrLoad() {
      document.getElementById('menu').classList.remove('fa-times'); // Remove the 'fa-times' class from the menu
      document.querySelector('header').classList.remove('toggle'); // Remove the 'toggle' class from the header
  
      if (window.scrollY > 0) { // If the page is scrolled down
        document.querySelector('.top').style.display = 'block'; // Show the element with class 'top'
      } else {
        document.querySelector('.top').style.display = 'none'; // Hide the element with class 'top'
      }
    }
  
    // Attach the onScrollOrLoad function to the window's scroll and load events
    window.addEventListener('scroll', onScrollOrLoad);
    window.addEventListener('load', onScrollOrLoad);
  
    // When any anchor link is clicked
    document.querySelectorAll('a[href*="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor click behavior
  
        // Get the target element to scroll to
        var targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          // Scroll smoothly to the target element
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  




    
  // });
  





// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
//   });


// ScrollReveal().reveal('.home', { origin: 'left' });
// ScrollReveal().reveal('.about, .education, .portfolio ', { origin: 'top' });
// ScrollReveal().reveal('.contact', { origin: 'bottom' });
