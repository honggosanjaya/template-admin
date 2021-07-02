const inputElements = document.querySelectorAll("input");

inputElements.forEach((element) => {
  if (element.type == "checkbox") {
    element.checked = true;
  }
});
