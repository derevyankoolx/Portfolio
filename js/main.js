$(function (){
    $('.portfolio__slider').slick({
        arrows: true,
        responsive: [
            {
              breakpoint: 1253,
              settings: {
                arrows: false
              }
            }
        ]
    });
});

$(document).ready(function() {
 
 
    $("a.link").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 800,
          easing: "swing"
       });
       return false;
    });
  
  
});

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  