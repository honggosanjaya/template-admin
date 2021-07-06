let lineChart = document.getElementById("lineChart").getContext("2d");

let totalProfitChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total Profit 2021",
        data: [475, 350, 290, 580, 880, 600, 1025],
        backgroundColor: ["royalblue", "orange", "yellow ", "purple", "red", "green", "aqua"],
        borderWidth: 1,
        borderColor: "#666",
        hoverBorderWidth: 2,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        left: 10,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
  },
});

let barChart = document.getElementById("barChart").getContext("2d");

let totalOrderChart = new Chart(barChart, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Product Sales 2021",
        data: [475, 350, 290, 580, 880, 600, 1025],
        backgroundColor: ["#ef5350", "#ec407a", "#ba68c8 ", "#9575cd", "#7986cb ", "#64b5f6", "#f0f4c3"],
        borderWidth: 1,
        borderColor: "#666",
        hoverBorderWidth: 2,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Pie Chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Category", "Quantity"],
    ["Man", 40],
    ["Woman", 15],
    ["Kid", 15],
    ["Accessories", 30],
  ]);

  var options = {
    backgroundColor: "transparent",
    title: "Product Category",
    titleTextStyle: {
      color: "#00567e",
      fontSize: 14,
      bold: true,
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById("piechart"));

  chart.draw(data, options);
}
