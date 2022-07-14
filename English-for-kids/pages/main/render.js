function renderCategories(categoryArray) {
  cardsRendered = false;
  const cardBlock = document.body.querySelector("#card-block");
  deleteCards();
  for (const eachCategory of categoryArray) {
    const idForCard = eachCategory.title;
    const card = `
       <div class="card category-card" id="${idForCard}">
          <div class="card-photo">
             <img src="../../assets/images/categories-covers/${eachCategory.image}" alt="${eachCategory.title}">
          </div>
          <div style="
          background: ${eachCategory.color};
          color: #fff"
          class="card-title"
          >${eachCategory.title}</div>
         </div>
       </div>`;
    cardBlock.innerHTML += card;
  }
  const cardsOfCategories = document.body.querySelectorAll(".category-card");
  cardsOfCategories.forEach((eachCategory) => {
    eachCategory.addEventListener("click", (event) => {
      const clickedCardTitle = event.target
        .closest(".category-card")
        .getAttribute("id");
      setStatusActive(clickedCardTitle);
      OpenClickedCategory(clickedCardTitle);
      changePageTitle(clickedCardTitle);
    });
  });
}
function renderCards(category) {
  cardsRendered = true;
  const cardBlock = document.body.querySelector("#card-block");
  deleteCards();
  for (const eachCard of category) {
    const card = `
     <div class="card" voice="${eachCard.audioSrc}">
        <div class="card-photo">
           <img  voice="${eachCard.audioSrc}" src="../../assets/images/card-photos/${eachCard.image}" alt="${eachCard.word}">
        </div>
        <div
        voice="${eachCard.audioSrc}"
        style="
        border: 2px solid rgba(113, 212, 0, 0.5);"
        class="card-title"> <span translation="${eachCard.translation}" word="${eachCard.word}" voice="${eachCard.audioSrc}" id="card-word"> ${eachCard.word}</span>
        <img voice="${eachCard.audioSrc}"  rotate class="rotate-icon" src="../../assets/icons/refresh.png" alt="rotate icon">     
        </div>
       </div>`;
    cardBlock.innerHTML += card;
    renderVoice();
  }
  translateWord();
}
function renderVoice() {
  const currentCards = document.querySelectorAll(".card");
  currentCards.forEach((currentCard) => {
    currentCard.addEventListener("click", (event) => {
      const clickedCurrentCard = event.target;
      if (clickedCurrentCard.hasAttribute("voice")) {
        const currentCardAudioLink =
          "../../assets/" + clickedCurrentCard.getAttribute("voice");
        const audio = new Audio(currentCardAudioLink);
        audio.play();
      }
    });
  });
}

function renderPlayingCards(choosenCategory) {
  playingCardsRendered = !playingCardsRendered;
  const cardBlock = document.body.querySelector("#card-block");
  deleteCards();
  let eachCardId = 0;
  for (const eachCard of choosenCategory) {
    const card = `
     <div id="${++eachCardId}" class="playing-card" voice="${
      eachCard.audioSrc
    }">
       <div class="playing-card-photo">
         <img voice="${
           eachCard.audioSrc
         }" src="../../assets/images/card-photos/${eachCard.image}"
             alt="${eachCard.word}">
       </div>
     </div>`;
    cardBlock.innerHTML += card;
  }
}
