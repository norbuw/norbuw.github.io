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
// To show the buttong when the user scrolls down 200px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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



// Clock
/* function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var y = today.getFullYear();
  var o = today.getMonth();
  var a = today.getDate();
  var d = today.getDay();

  var monthnames = new Array();
  monthnames[0] = "janvier";
  monthnames[1] = "février";
  monthnames[2] = "mars";
  monthnames[3] = "avril";
  monthnames[4] = "mai";
  monthnames[5] = "juin";
  monthnames[6] = "juillet";
  monthnames[7] = "août";
  monthnames[8] = "septembre";
  monthnames[9] = "octobre";
  monthnames[10] = "novembre";
  monthnames[11] = "décembre";

  var weekdays = new Array();
  weekdays[0] = "dimanche";
  weekdays[1] = "lundi";
  weekdays[2] = "mardi";
  weekdays[3] = "mercredi";
  weekdays[4] = "jeudi";
  weekdays[5] = "vendredi";
  weekdays[6] = "samedi";

  m = checkTime(m);
  s = checkTime(s);
  a = checkTime(a);

  document.getElementById('clock').innerHTML =
      `<h1>${weekdays[d]}, ${a} ${monthnames[o]}, ${y}, <span id="clocktime">${h}:${m}:${s}</h1>`;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // Ajoute un zéro devant les nombres à un chiffre (i > 10)
  return i;
}

startTime() */
