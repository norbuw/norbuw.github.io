// Clock
function showTime() {
  var today = new Date();
  var hr = today.getHours();
  var mn = today.getMinutes();
  var sc = today.getSeconds();
  var yr = today.getFullYear();
  var mo = today.getMonth();
  var dt = today.getDate();
  var dy = today.getDay();

  var months = new Array();
  months[0] = "janvier";
  months[1] = "février";
  months[2] = "mars";
  months[3] = "avril";
  months[4] = "mai";
  months[5] = "juin";
  months[6] = "juillet";
  months[7] = "août";
  months[8] = "septembre";
  months[9] = "octobre";
  months[10] = "novembre";
  months[11] = "décembre";

  var weekdays = new Array();
  weekdays[0] = "dimanche";
  weekdays[1] = "lundi";
  weekdays[2] = "mardi";
  weekdays[3] = "mercredi";
  weekdays[4] = "jeudi";
  weekdays[5] = "vendredi";
  weekdays[6] = "samedi";

  mn = checkTime(mn);
  sc = checkTime(sc);
  dt = checkTime(dt);

  document.getElementById('clock').innerHTML =
      `<h1>${weekdays[dy]} * ${dt} ${months[mo]} ${yr} * <span id="clocktime">${hr}:${mn}:${sc}</h1>`;
  setTimeout(showTime, 500);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // Adds a zero in front of single digit numbers
  return i;
}
showTime()

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
