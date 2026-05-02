// Current year in footer
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}



// Return-to-top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (topBtn) {
    if (window.scrollY > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
});

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



// Homepage slideshow
let homeSlideIndex = 0;
const homeSlides = document.querySelectorAll(".slide");

function showHomeSlides() {
  if (homeSlides.length > 0) {
    homeSlides.forEach(function (slide) {
      slide.style.display = "none";
    });

    homeSlideIndex++;

    if (homeSlideIndex > homeSlides.length) {
      homeSlideIndex = 1;
    }

    homeSlides[homeSlideIndex - 1].style.display = "block";
  }
}

if (homeSlides.length > 0) {
  showHomeSlides();
  setInterval(showHomeSlides, 3000);
}



// Reviews page slideshow
let reviewIndex = 0;
const reviewSlides = document.querySelectorAll(".review-slide");

function showReviewSlides() {
  if (reviewSlides.length > 0) {
    reviewSlides.forEach(function (slide) {
      slide.style.display = "none";
    });

    reviewIndex++;

    if (reviewIndex > reviewSlides.length) {
      reviewIndex = 1;
    }

    reviewSlides[reviewIndex - 1].style.display = "block";
  }
}

if (reviewSlides.length > 0) {
  showReviewSlides();
  setInterval(showReviewSlides, 3000);
}



// Countdown on About page
const countdownElement = document.getElementById("countdown");

if (countdownElement) {
  const countdownDate = new Date("June 1, 2026 12:00:00").getTime();

  setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if (distance > 0) {
      countdownElement.textContent =
        days + " days " + hours + " hours " + minutes + " minutes remaining";
    } else {
      countdownElement.textContent = "The book reveal is here!";
    }
  }, 1000);
}



// Search bar for books
const bookSearch = document.getElementById("bookSearch");
const bookItems = document.querySelectorAll(".book-item");

if (bookSearch) {
  bookSearch.addEventListener("keyup", function () {
    const searchText = bookSearch.value.toLowerCase();

    bookItems.forEach(function (book) {
      const title = book.querySelector("h3").textContent.toLowerCase();

      if (title.includes(searchText)) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });
}


// Genre hover effect
const genreItems = document.querySelectorAll(".genre-book");

genreItems.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "#d6a85c";
  });

  item.addEventListener("mouseout", function () {
    item.style.backgroundColor = "#f3e7d3";
  });
});




// GOOD (safe for CSP)
setInterval(showSlides, 3000);

function showSlides() {
  console.log("working");
}