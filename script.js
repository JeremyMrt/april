const ctx = document.getElementById("weekly-data-chart");
const cty = document.getElementById("yearly-data-chart");
const landingPage = document.querySelector(".landing-page");
const analyticsPage = document.querySelector(".analytics-landing-page");
const solutionsPage = document.querySelector(".solutions-landing-page");
const homeContent = document.querySelector(".home-content");
const homePageWelcome = document.querySelector(".home-page-welcome");
const nameplate = document.getElementById("nameplate");
const header = document.querySelector("header");
const logo = document.querySelector("header > h1");
const navBar = document.querySelector("nav");
const statement = document.getElementById("statement");
const aprilAcademy = document.querySelector(".april-academy-content");
const form = document.querySelector("form");

if (!localStorage.getItem("first-name")) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var inputName = document.getElementById("first-name");
    localStorage.setItem("first-name", inputName.value);

    landingPage.style.display = "none";
    homeContent.style.display = "block";
    homePageWelcome.style.display = "block";
    header.style.display = "flex";
    navBar.style.display = "flex";
    logo.style.fontSize = "var(--ff-size-logo)";

    nameplate.textContent = inputName.value;
  });
} else {
  landingPage.style.display = "none";
  homeContent.style.display = "block";
  homePageWelcome.style.display = "block";
  header.style.display = "flex";
  navBar.style.display = "flex";
  logo.style.fontSize = "var(--ff-size-logo)";

  nameplate.textContent = localStorage.getItem("first-name");
}

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
  homeContent.style.display = "none";
  homePageWelcome.style.display = "none";
  aprilAcademy.style.display = "none";
  solutionsPage.style.display = "none";

  logo.style.fontSize = "var(--ff-size-logo)";
  header.style.display = "flex";
  analyticsPage.style.display = "flex";
}

function getHomePage() {
  analyticsPage.style.display = "none";
  aprilAcademy.style.display = "none";
  solutionsPage.style.display = "none";

  homeContent.style.display = "block";
  homePageWelcome.style.display = "block";
  header.style.display = "flex";
  logo.style.fontSize = "var(--ff-size-logo)";
}
function getSolutionsPage() {
  analyticsPage.style.display = "none";
  homeContent.style.display = "none";
  homePageWelcome.style.display = "none";
  aprilAcademy.style.display = "none";

  logo.style.fontSize = "var(--ff-size-logo)";
  header.style.display = "flex";
  solutionsPage.style.display = "flex";
}

function getAcademyPage() {
  homeContent.style.display = "none";
  analyticsPage.style.display = "none";
  solutionsPage.style.display = "none";
  homePageWelcome.style.display = "none";

  header.style.display = "flex";
  aprilAcademy.style.display = "block";
  logo.style.fontSize = "var(--ff-size-logo)";
}

function getStatement() {
  if (statement.style.display === "none") {
    statement.style.display = "block";
  } else {
    statement.style.display = "none";
  }
}

// copied from https://codepen.io/CheeseTurtle/pen/AYJYqE

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};
