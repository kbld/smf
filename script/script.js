/* Hamburger Menu Responsive */

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");

  if (navbarMenu.classList.contains("is-active")) {
    navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
  } else {
    navbarMenu.removeAttribute("style");
  }
});

/* Hamburger Menu Responsive */



/* FAQ Open / Close */

$(document).ready(function () {
  $(".accordion-title").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem)
      .slideToggle()
      .parent()
      .siblings()
      .find(".accordion-content")
      .slideUp();

    $(this).toggleClass("active-title");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title")
      .removeClass("active-title");

    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title i.fa-chevron-down")
      .removeClass("chevron-top");
  });
});

/* FAQ Open / Close */

/* La programmation sort / filters */

var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
  getSortData: {
    name: ".name",
    stage: ".stage",
    hours: ".hours",
    category: "[data-category]",
    weight: function (itemElem) {
      var weight = $(itemElem).find(".weight").text();
      return parseFloat(weight.replace(/[\(\)]/g, ""));
    },
  },
});

$(".grid").isotope({ filter: ".ven16" });

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find(".number").text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find(".name").text();
    return name.match(/ium$/);
  },
};

// with jQuery
var $grid = $(".grid").isotope({
  itemSelector: ".grid-item",
  getSortData: {
    name: ".name",
    category: "[data-category]",
  },
  // layout mode options
  masonry: {
    columnWidth: 200,
  },
});

// bind filter button click
$("#filters").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$("#sorts").on("click", "button", function () {
  var sortByValue = $(this).attr("data-sort-by");
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

masonry: {
  columnWidth: 200;
}

/* La programmation sort / filters */

/* Compte à rebours Accueil */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "22 Nov 2024";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time; // updated to use backticks instead of quotes
}

// initial call

countdown();
setInterval(countdown, 1000);

window.addEventListener("load", function () {
  var newVideo = document.getElementById("videoElementId");
  newVideo.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );

  newVideo.play();
});

/* Compte à rebours Accueil */

