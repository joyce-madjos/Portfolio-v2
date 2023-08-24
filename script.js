let body = document.getElementsByTagName("body");
let sidebar = document.getElementById("mySidenav");

function openNav() {
  sidebar.style.display = "block";
  sidebar.style.width = "100%";
  body.style.overflow = "hidden";
}

function closeNav() {
  sidebar.style.width = "0";
  body.style.overflow = "auto";
}
