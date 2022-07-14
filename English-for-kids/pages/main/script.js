// burger
const burger = document.body.querySelector("#burger");
const nav = document.body.querySelector("#nav");
const closeBurger = document.body.querySelector(".nav-cross");
const navItems = document.body.querySelectorAll(".nav-item");
const main = document.body.querySelector(".main");
const switchBlock = document.body.querySelector(".switch-block");
const controlBlock = document.body.querySelector(".control-block");
const headerBody = document.body.querySelector(".header-body");

let cardsRendered = false;
let playMode = false;
let gameMode = true;
let playingCardsRendered = false;
let gameStarted = false;
let gameReStarted = false;

// when user opens the page, categories will rendered automatically (just one time)
window.onload = function () {
  renderCategories(categories);
};

function showNav() {
  nav.classList.remove("hidden");
  nav.addEventListener("mouseleave", () => {
    closeNav();
  });
}
function closeNav() {
  nav.classList.add("hidden");
}
//open nav menu
burger.addEventListener("click", () => {
  if (gameMode) {
    showNav(); //open navigation panel (when burger clicked)
    navItems.forEach((curentNavItem) => {
      curentNavItem.addEventListener("click", (e) => {
        const clickedNavItemTitle = e.target.innerText;
        setStatusActive(clickedNavItemTitle);
        changePageTitle(clickedNavItemTitle);
        OpenClickedCategory(clickedNavItemTitle);
        closeNav();
      });
    });
    closeBurger.addEventListener("click", () => {
      closeNav();
    });
  }
});

function choosePlayinCardsOrTrainCards(category) {
  playMode
    ? renderPlayingCards(category) & showControlBLock() & startGame(category)
    : renderCards(category);
}

const categoriesMap = new Map([
  [
    "Main Page",
    () => {
      closeControlBLock(), renderCategories(categories);
    },
  ],
  [
    "Main page",
    () => {
      closeControlBLock(), renderCategories(categories);
    },
  ],
  [
    "Fairy tales",
    () => {
      choosePlayinCardsOrTrainCards(fairy_tales);
    },
  ],
  [
    "Animals 1",
    () => {
      choosePlayinCardsOrTrainCards(animal_1);
    },
  ],
  [
    "Animals 2",
    () => {
      choosePlayinCardsOrTrainCards(animal_2);
    },
  ],
  [
    "Clothes",
    () => {
      choosePlayinCardsOrTrainCards(clothes);
    },
  ],
  [
    "Emotions",
    () => {
      choosePlayinCardsOrTrainCards(emotions);
    },
  ],
  [
    "Action 1",
    () => {
      choosePlayinCardsOrTrainCards(action_1);
    },
  ],
  [
    "Action 2",
    () => {
      choosePlayinCardsOrTrainCards(action_2);
    },
  ],
  [
    "Foods",
    () => {
      choosePlayinCardsOrTrainCards(foods);
    },
  ],
]);
function OpenClickedCategory(clickedCategoryTitle) {
  clickedCategoryTitle = clickedCategoryTitle.split("_").join(" ");
  categoriesMap.get(clickedCategoryTitle)();
}
function setStatusActive(clickedCategory) {
  const navItems = document.body.querySelectorAll(".nav-item");
  navItems.forEach((eachCategoryInNav) => {
    if (eachCategoryInNav.innerText == clickedCategory) {
      const activeNavItem = document.body.querySelector(".active");
      activeNavItem.classList.remove("active");
      eachCategoryInNav.classList.add("active");
    }
  });
}
function deleteCards() {
  document.body.querySelector("#card-block").innerHTML = "";
}
function changePageTitle(newTitle) {
  document.body.querySelector(".page-title").innerText = newTitle;
}
function translateWord() {
  let cardRotated = false;
  const currentCards = document.querySelectorAll(".card");
  currentCards.forEach((currentCard) => {
    const clickedCardTitleBlock = currentCard.querySelector(".card-title");
    const clickedCardTitle = currentCard.querySelector("#card-word");

    currentCard.addEventListener("mousedown", (event) => {
      const clickedRotateIcon = event.target;
      if (clickedRotateIcon.hasAttribute("rotate")) {
        const clickedCurrentCardTitle = clickedRotateIcon
          .closest(".card")
          .querySelector("#card-word");

        if (!cardRotated) {
          cardRotated = !cardRotated;
          clickedCurrentCardTitle.innerText =
            clickedCurrentCardTitle.getAttribute("translation");
          clickedCardTitleBlock.style.backgroundColor = "#ff9900";
          clickedCardTitle.style.color = "#fff";
        } else {
          cardRotated = !cardRotated;
          clickedCurrentCardTitle.innerText =
            clickedCurrentCardTitle.getAttribute("word");
          clickedCardTitleBlock.style.backgroundColor = "#fff";
          clickedCardTitle.style.color = "#71d500";
        }
      }
    });
    if (!cardRotated) {
      currentCard.closest(".card").addEventListener("mouseleave", (event) => {
        const clickedRotateIcon = event.target;
        cardRotated = !cardRotated;
        const clickedCurrentCardTitle = clickedRotateIcon
          .closest(".card")
          .querySelector("#card-word");

        clickedCurrentCardTitle.innerText =
          clickedCurrentCardTitle.getAttribute("word");
        clickedCardTitleBlock.style.backgroundColor = "#fff";
        clickedCardTitle.style.color = "#71d500";
      });
    }
  });
}

// toggle (PLay mode - Train mode)
const toggle = document.body.querySelector(".slider");
const gameStatusText = document.body.querySelector(".game-status");

toggle.addEventListener("click", () => {
  playMode = !playMode;
  gameMode = !gameMode;

  if (playMode) {
    burger.style.display = "none";
    burger.style.cursor = "not-allowed";
  } else {
    burger.style.display = "flex";
    burger.style.cursor = "pointer";
  }

  const lastClosingCategoryTitle =
    document.body.querySelector(".page-title").innerText;
  OpenClickedCategory(lastClosingCategoryTitle);

  if (playMode) {
    // if play mode
    if (lastClosingCategoryTitle != "Main Page") {
      showControlBLock();
      // startGame()
    }
    gameStatusText.innerText = "PLAY";
    gameStatusText.classList.remove("green");
    gameStatusText.classList.add("orange");
    main.style.background =
      "url(../../assets/images/backgrounds/landscape2.jpg) top center / cover no-repeat";
  } else {
    // if train mode
    playingCardsRendered = !playingCardsRendered;
    closeControlBLock();

    gameStatusText.innerText = "TRAIN";
    gameStatusText.classList.add("green");
    gameStatusText.classList.remove("orange");
    main.style.background =
      "url(../../assets/images/backgrounds/landscape.jpg) top center / cover no-repeat";
  }
  // console.log(playMode ? "play mode" : "train mode");
});
