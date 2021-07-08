var profitReport = document.getElementById("profit-report").getContext("2d");
var chart = new Chart(profitReport, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Profit in 2021",
        backgroundColor: "#fff",
        borderColor: "#4f48ec",
        data: [475, 350, 300, 550, 875, 600, 1010],
      },
    ],
  },
});

var salesReport = document.getElementById("sales-report").getContext("2d");
var chart = new Chart(salesReport, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Product Sales in 2021",
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(255, 159, 64, 0.5)", "rgba(255, 205, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(201, 203, 207, 0.5)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        data: [450, 374, 250, 550, 900, 600, 1010],
      },
    ],
  },
});

var productCategory = document.getElementById("product-category").getContext("2d");
var chart = new Chart(productCategory, {
  type: "pie",
  data: {
    labels: ["Man", "Woman", "Kid", "Accessorie"],
    datasets: [
      {
        label: "Product Sales in 2021",
        backgroundColor: ["#3366cc", "#dc3912", "#ff9900", "#109618"],
        data: [450, 374, 250, 550],
      },
    ],
  },
});
