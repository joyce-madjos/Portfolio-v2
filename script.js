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

document
  .getElementById("productEngContainer")
  .addEventListener("click", function () {
    document.getElementById("productEng").style.display = "block";
  });
