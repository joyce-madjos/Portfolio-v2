var body = document.getElementsByTagName("body")[0],
  sidebar = document.getElementById("mySidenav");

function openNav() {
  sidebar.style.display = "block";
  sidebar.style.width = "100%";
  body.style.overflow = "hidden";
}

function closeNav() {
  sidebar.style.width = "0";
  body.style.overflow = "auto";
}

// sidebar.onmouseover = function () {

// };

// sidebar.onmouseout = function () {
//   body.style.overflow = "auto";
// };
