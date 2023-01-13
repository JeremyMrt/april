const ctx = document.getElementById("weekly-data-chart");
const cty = document.getElementById("yearly-data-chart");
const analyticsPage = document.querySelector(".analytics-landing-page");
const solutionsPage = document.querySelector(".solutions-landing-page");
const homeContent = document.querySelector(".home-content");
const homePageWelcome = document.querySelector(".home-page-welcome");
const header = document.querySelector("header");
const logo = document.querySelector("header > h1");
const statement = document.getElementById("statement");
const aprilAcademy = document.querySelector(".april-academy-content");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Energie", "Transport", "Alimentation", "Déchets"],
    datasets: [
      {
        label: "CO2",
        data: [12, 19, 3, 5],
        borderColor: "#fffcf1",
        backgroundColor: ["#A9AEFF", "#C6D0BC", "#F6D78B", "#E08183"],
        hoverOffset: 5,
        borderRadius: 9,
        cutout: 70,
      },
    ],
  },
  options: {
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(cty, {
  type: "line",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#f6d78b",
        borderWidth: 7,
        tension: 0.1,
        pointHoverBorderWidth: 25,
        cubicInterpolationMode: "monotone",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

function getFormPage() {
  analyticsPage.style.display = "flex";
  homeContent.style.display = "none";
  homePageWelcome.style.display = "none";
  logo.style.fontSize = "3rem";
  header.style.display = "block";
  aprilAcademy.style.display = "none";
  solutionsPage.style.display = "none";
}

function getHomePage() {
  analyticsPage.style.display = "none";
  homeContent.style.display = "block";
  homePageWelcome.style.display = "block";
  header.style.display = "block";
  logo.style.fontSize = "1.5rem";
  aprilAcademy.style.display = "none";
  solutionsPage.style.display = "none";
}
function getSolutionsPage() {
  analyticsPage.style.display = "none";
  homeContent.style.display = "none";
  homePageWelcome.style.display = "none";
  logo.style.fontSize = "3rem";
  header.style.display = "block";
  aprilAcademy.style.display = "none";
  solutionsPage.style.display = "flex";
}

function getAcademyPage() {
  homeContent.style.display = "none";
  header.style.display = "none";
  aprilAcademy.style.display = "block";
  analyticsPage.style.display = "none";
  solutionsPage.style.display = "none";
}

function getStatement() {
  if (statement.style.display === "none") {
    statement.style.display = "block";
  } else {
    statement.style.display = "none";
  }
}
