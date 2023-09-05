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

// ----Product Engineer Experience Buttons----
let buttonProdEngMore = document.querySelector("#see-more-prod-button");
let buttonProdEngLess = document.querySelector("#see-less-prod-button");

// More
buttonProdEngMore.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-prod");

  elements.forEach(function (element) {
    element.style.display = "list-item";
  });

  buttonProdEngMore.style.display = "none";
  buttonProdEngLess.style.display = "block";
});

// Less
buttonProdEngLess.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-prod");
  elements.forEach(function (element) {
    element.style.display = "none";
  });

  buttonProdEngLess.style.display = "none";
  buttonProdEngMore.style.display = "block";
});

// ----UI/UX Designer Experience Buttons----
let buttonUIMore = document.querySelector("#see-more-ui-button");
let buttonUILess = document.querySelector("#see-less-ui-button");

// More
buttonUIMore.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-ui");

  elements.forEach(function (element) {
    element.style.display = "list-item";
  });

  buttonUIMore.style.display = "none";
  buttonUILess.style.display = "block";
});

// Less
buttonUILess.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-ui");
  elements.forEach(function (element) {
    element.style.display = "none";
  });

  buttonUILess.style.display = "none";
  buttonUIMore.style.display = "block";
});

// ----Web Admin Experience Buttons----
let buttonAdminMore = document.querySelector("#see-more-admin-button");
let buttonAdminLess = document.querySelector("#see-less-admin-button");

// More
buttonAdminMore.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-admin");

  elements.forEach(function (element) {
    element.style.display = "list-item";
  });

  buttonAdminMore.style.display = "none";
  buttonAdminLess.style.display = "block";
});

// Less
buttonAdminLess.addEventListener("click", function () {
  let elements = document.querySelectorAll("#see-more-admin");
  elements.forEach(function (element) {
    element.style.display = "none";
  });

  buttonAdminLess.style.display = "none";
  buttonAdminMore.style.display = "block";
});
