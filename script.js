let body = document.getElementsByTagName("body");
let sidebar = document.getElementById("mySidenav");
let trigram = document.getElementById("menu");

function openNav() {
  sidebar.style.display = "block";
  sidebar.style.width = "100%";
  body.style.overflow = "hidden";
}

function closeNav() {
  sidebar.style.display = "none";
  // sidebar.style.width = "0";
  // body.style.overflow = "auto";
  trigram.checked = false;
}

trigram.addEventListener("click", () => {
  if (trigram.checked == false) {
    trigram.style.backgroundColor = "red";
    sidebar.style.display = "none";
    // sidebar.style.width = "0";
    // body.style.overflow = "auto";
    // trigram.classList.add("menu");
  } else {
    // openNav();
    sidebar.style.display = "block";
    // body.style.overflow = "hidden";
    trigram.style.backgroundColor = "yellow";
  }
});
