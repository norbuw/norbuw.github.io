// Sidebar
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=> {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
  } else {
    document.querySelector('.ham').style.display = 'none'
    setTimeout(() => {
      document.querySelector('.cross').style.display = 'inline'
    }, 300);
  }
})

// Scroll to top
//Get the button
var topbutton = document.getElementById("topBtn");
// To show the button when the user scrolls down 500px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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

// Email 
function sendEmail() {
  Email.send({
      Host: "smtp.gmail.com",
      Username: "norbuw@gmail.com",
      Password: "eesfzcemewojfnkn",
      To: 'norbuw@gmail.com',
      From: document.getElementById("email").value,
      Subject: "New Contact Form Enquiry",
      Body: "Name: " + document.getElementById("name").value + "<br> Email: "
          + document.getElementById("email").value + "<br> Subject: "
          + document.getElementById("subject").value + "<br> Message: "
          + document.getElementById("message").value
  }).then(
      message => alert("Mail Sent Successfully")
  );
}