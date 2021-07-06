// if (document.documentElement.clientWidth < 900) {
//   const inputElements = document.querySelectorAll("input");

//   inputElements.forEach((element) => {
//     if (element.type == "checkbox") {
//       element.checked = true;
//     }
//   });
// }

window.addEventListener(
  "resize",
  function () {
    if (window.matchMedia("(min-width: 100px)").matches) {
      document.getElementById("nav-toggle").checked = false;
    }
  },
  true
);

const counters = document.querySelectorAll(".counter");
const speed = 200;
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

const sidebarLinks = document.querySelectorAll(".sidebar-menu a");

for (i = 0; i < sidebarLinks.length; i++) {
  sidebarLinks[i].addEventListener("click", function () {
    const currentActive = document.querySelector(".active");
    currentActive.classList.remove("active");
    this.classList.add("active");
  });
}
