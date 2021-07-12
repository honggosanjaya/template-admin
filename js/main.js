if (document.documentElement.clientWidth < 900) {
  const navToggle = document.getElementById("nav-toggle");
  navToggle.checked = true;
}

// FOCUS SEARCH
function focusStyle() {
  const searchWrapper = document.querySelector(".search-wrapper");
  searchWrapper.style.border = "1px solid #003a7b";
}

function focusOutStyle() {
  const searchWrapper = document.querySelector(".search-wrapper");
  searchWrapper.style.border = "1px solid #ccc";
}

// COUNTER Card
const counters = document.querySelectorAll(".counter");
const speed = 300;
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    }
  };
  updateCount();
});

// sidebar link
const sidebarLinks = document.querySelectorAll(".sidebar-menu a");

for (i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener("click", function () {
    const currentActive = document.querySelector(".active");
    currentActive.classList.remove("active");
    this.classList.add("active");
  });
}

// DARKMODE
let darkmode_toggle = document.querySelector("#darkmode-toggle");
let textMode = document.querySelector("#darkmode-toggle p");

darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  document.querySelector("body").classList.toggle("dark");
  darkmode_toggle.querySelector(".darkmode-switch").classList.toggle("active");

  const iconMode = document.querySelector(".darkmode-toggle .bi");
  iconMode.classList.toggle("bi-brightness-high-fill");
  iconMode.classList.toggle("bi-moon-stars");

  if (iconMode.classList.contains("bi-brightness-high-fill")) {
    textMode.innerText = "Light mode";
    textMode.style.color = "#000";
  } else {
    textMode.innerText = "Dark mode";
    textMode.style.color = "#fff";
  }
};

// dropdown profil
const dropdownProfilToggle = document.querySelector(".bi-chevron-down");
const dropdownProfilElement = document.querySelector(".admin-details");

dropdownProfilToggle.addEventListener("click", function () {
  dropdownProfilToggle.classList.toggle("down-animation");
  dropdownProfilElement.classList.toggle("m-fadeIn");
  dropdownProfilElement.classList.toggle("m-fadeOut");
});

// serach bar
const searchWrapper = document.querySelector(".search-wrapper");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const adminName = document.querySelector(".admin-name");

if (document.documentElement.clientWidth < 560) {
  searchBtn.addEventListener("click", function () {
    searchWrapper.classList.add("active");
    cancelBtn.style.display = "block";
    searchBtn.style.display = "none";
    adminName.style.display = "none";
  });

  cancelBtn.addEventListener("click", function () {
    searchWrapper.classList.remove("active");
    cancelBtn.style.display = "none";
    searchBtn.style.display = "block";
    adminName.style.display = "block";
  });
}
