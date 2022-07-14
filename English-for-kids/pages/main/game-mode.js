function startGame(category) {
  resetBlockOfHearts();

  let currectCardsAudioArray = [];
  const cardBlock = document.body.querySelectorAll(".playing-card");
  const randomNumberArray = [];
  for (let currentCategoryCurrentCard of category) {
    const currentCardAudioLink =
      "../../assets/" + currentCategoryCurrentCard.audioSrc;
    currectCardsAudioArray.push(currentCardAudioLink);
  }
  let randomNumber = getRandomInt(category.length);
  randomNumberArray.push(randomNumber);
  const repeatSoundButton = document.body.querySelector(".repeat-sound");
  repeatSoundButton.addEventListener("click", () => {
    play(currectCardsAudioArray[randomNumber]);
  });
  cardBlock.forEach((eachCard, index, array) => {
    if (index === array.length - 1) {
      setTimeout(() => {
        play(currectCardsAudioArray[randomNumber]);
      }, 1800);
    }
    eachCard.addEventListener("click", (event) => {
      const clickedCard = event.target.closest(".playing-card");
      const clickedCardID =
        +event.target.closest(".playing-card").getAttribute("id") - 1;

      if (clickedCardID === randomNumber) {
        // true answer
        clickedCard.style.pointerEvents = "none";
        clickedCard.style.opacity = "0.3";

        if (randomNumberArray.length != category.length) {
          successAudio();

          while (randomNumberArray.includes(randomNumber)) {
            randomNumber = getRandomInt(category.length);
            if (randomNumberArray.length === category.length) break;
          }
        }

        randomNumberArray.push(randomNumber);
        if (randomNumberArray.length <= category.length) {
          setTimeout(() => {
            play(currectCardsAudioArray[randomNumber]);
          }, 1200);
        }
        if (randomNumberArray.length - category.length === 1) {
          // if game ended succesfully
          currectCardsAudioArray = [];
          gameEndingAudio();
          showWinOrLoseModal("win.png");
          setTimeout(() => {
            OpenClickedCategory("Main page");
            changePageTitle("Main page");
            resetBlockOfHearts();
            hiddenModal();
          }, 4000);
        }
      } else {
        // wrong answer
        if (!gameOverOrNot()) {
          errorAudio();
          removeHearts();
          setTimeout(() => {
            play(currectCardsAudioArray[randomNumber]);
          }, 1000);
          clickedCard.classList.add("shake");
          setTimeout(() => {
            clickedCard.classList.remove("shake");
          }, 500);
        } else {
          // if game over
          currectCardsAudioArray = [];
          gameOverAudio();
          showWinOrLoseModal("game_over.png");
          setTimeout(() => {
            OpenClickedCategory("Main page");
            changePageTitle("Main page");
            resetBlockOfHearts();
            hiddenModal();
          }, 4000);
        }
      }
    });
  });
}
function repeatSoundBtn(currectCardsAudioArray, currentRandomNumber) {
  console.log("repeat sound , random number is: ", currentRandomNumber);
  const repeatSoundButton = document.body.querySelector(".repeat-sound");
  repeatSoundButton.addEventListener("click", () => {
    console.log("click repeat button");
    console.log("randomNumber from repeat buton: ", currentRandomNumber);
    play(currectCardsAudioArray[currentRandomNumber]);
  });
}
function gameOverOrNot() {
  const remainingAttempts = document.body.querySelectorAll(".heart");
  console.log(remainingAttempts);
  if (remainingAttempts.length === 1) {
    console.log("game over");
    return true;
  }
  console.log("continue");
  return false;
}
function showWinOrLoseModal(modalImg) {
  const modal = document.body.querySelector(".modal");
  modal.style.display = "flex";
  const modalImgTag = document.body.querySelector(".game-over-img");
  const modalImgSrc = "../../assets/icons/" + modalImg;
  modalImgTag.src = modalImgSrc;
}
function hiddenModal() {
  const modal = document.body.querySelector(".modal");
  modal.style.display = "none";
}

function closeControlBLock() {
  controlBlock.style.display = "none";
}
function showControlBLock() {
  controlBlock.style.display = "flex";
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function removeHearts() {
  const firstHeart = document.body.querySelector(".heart");
  console.log(firstHeart);
  firstHeart.remove();
}
function resetBlockOfHearts() {
  const heartsBlock = document.body.querySelector(".hearts-block");
  heartsBlock.innerHTML = "";
  // console.log(heartsBlock);
  for (let count = 0; count < 5; count++) {
    const whiteHeart =
      '<img class="heart" src="../../assets/icons/white-heart.png" alt="black-heart">    ';
    heartsBlock.insertAdjacentHTML("afterbegin", whiteHeart);
  }
}
