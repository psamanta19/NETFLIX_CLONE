import { renderReasons } from "./components/reasons.js";

const trendingWindow = document.querySelector(".trending-window");
const movieCards = document.querySelectorAll(".movie-card");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function getVisibleCards() {
  return window.innerWidth <= 768 ? 2 : 5;
}

function showMovie(index) {
  if (!movieCards[index]) {
    return;
  }

  movieCards[index].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start"
  });
}

function updateSliderButtons() {
  const visibleCards = getVisibleCards();
  const maximumIndex = movieCards.length - visibleCards;

  if (currentIndex <= 0) {
    previousButton.classList.add("hidden");
  } else {
    previousButton.classList.remove("hidden");
  }

  if (currentIndex >= maximumIndex) {
    nextButton.classList.add("hidden");
  } else {
    nextButton.classList.remove("hidden");
  }
}

nextButton.addEventListener("click", () => {
  const visibleCards = getVisibleCards();
  const maximumIndex = movieCards.length - visibleCards;

  if (currentIndex < maximumIndex) {
    currentIndex++;
    showMovie(currentIndex);
    updateSliderButtons();
  }
});

previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showMovie(currentIndex);
    updateSliderButtons();
  }
});

let previousWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const currentWidth = window.innerWidth;

  if (
    (previousWidth <= 768 && currentWidth > 768) ||
    (previousWidth > 768 && currentWidth <= 768)
  ) {
    currentIndex = 0;
    trendingWindow.scrollLeft = 0;
  }

  previousWidth = currentWidth;

  updateSliderButtons();
});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;

    item.classList.toggle("active");
  });
});


updateSliderButtons();
renderReasons();