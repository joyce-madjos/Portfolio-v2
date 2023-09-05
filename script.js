let body = document.getElementsByTagName("body");
let sidebar = document.getElementById("mySidenav");
let trigram = document.getElementById("menu");
let seeMoreButton = document.getElementById("see-more-prod-button");
let showLess = document.getElementById("see-less-prod-button");

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

function seeMore() {
  seeMoreButton.style.display = "none";
  showLess.style.display = "block";
  // let elements = document.querySelectorAll("#see-more-prod");
  // elements.forEach(function (element) {
  //   element.style.display = "list-item";
  // });
}

function seeLess() {
  showLess.style.display = "none";
  seeMoreButton.style.display = "block";
}

let buttonProdEngMore = document.querySelector("#see-more-prod-button");

buttonProdEngMore.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-prod");
  elements.forEach(function (element) {
    element.style.display = "list-item";
  });
});

let buttonProdEngLess = document.querySelector("#see-less-prod-button");

buttonProdEngLess.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-prod");
  elements.forEach(function (element) {
    element.style.display = "none";
  });
});
