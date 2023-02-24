// Scroll to top
//Get the button
var topbutton = document.getElementById("topBtn");
// To show the button when the user scrolls down 500px from the top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const toggleMenu = () => {
  document.body.classList.toggle("open");
};
