let body = document.getElementsByTagName("body");
let sidebar = document.getElementById("mySidenav");
let trigram = document.getElementById("menu");

function openNav() {
  sidebar.style.display = "block";
  sidebar.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  sidebar.style.display = "none";
  document.body.style.overflowY = "auto";
  trigram.checked = false;
}

trigram.addEventListener("click", () => {
  if (trigram.checked == false) {
    closeNav();
  } else {
    openNav();
  }
});
