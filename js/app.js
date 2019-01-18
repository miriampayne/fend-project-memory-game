// Create list that holds cards
let cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
const icons = [];

icons[0] = "diamond";
icons[1] = "paper-plane-o";
icons[2] = "anchor";
icons[3] = "bolt";
icons[4] = "cube";
icons[5] = "bicycle";
icons[6] = "bomb";
icons[7] = "leaf";

const deck = document.querySelector(".deck");

const setup = function() {

  let openedCards = [];
  let matchedCards = [];

  // Create and display cards on page
  for (let i = 0; i < cards.length; i++) {
  // Loop through each card and create its HTML
    const cardElement = document.createElement("li");
  // cardElement.classList.add("show");
    cardElement.classList.add("card");
  // Display the card's symbol
    const cardType = cards[i];
    const cardIcon = icons[cardType];
    cardElement.innerHTML = `<i class="fa fa-${cardIcon}"></i>`;
    deck.appendChild(cardElement);
  // Event listener for a card
    cardElement.addEventListener("click", function() {

      const currentCard = this;
      const previousCard = openedCards[0];

  // Prevent same card being clicked twice
      if(currentCard === previousCard) {
        return;
      }
  // Existing open card
        if(openedCards.length === 1) {

          cardElement.classList.add("open", "show");
  // Save opened cards
          openedCards.push(this);


  // Compare 2 opened cards
          if(currentCard.innerHTML === previousCard.innerHTML) {
  // Matched - if the cards do match, lock the cards in the open position
            currentCard.classList.add("match");
            previousCard.classList.add("match");

            matchedCards.push(currentCard, previousCard);

  // Reset opened cards for when matched
            openedCards = [];

  // Check if game OVER
            gameOver();

          } else {
  // No match - if the cards do not match, remove the cards from the list and hide the card's symbol
            currentCard.classList.remove("open", "show");
            previousCard.classList.remove("open", "show");

  // Reset opened cards for when no match
            openedCards = [];

          }

        } else {
  // No open cards
            currentCard.classList.add("open", "show");
  // Save opened cards
            openedCards.push(this);

        }
    });
  };
  // Create the winning condition
  function gameOver() {
    if(matchedCards.length === (icons.length * 2)) {
      alert("GAME OVER!");
    }
  }
};
// clear out any cards already in deck element to support refresh button

//  shuffle the list of cards using the provided "shuffle" method below
cards = shuffle(cards);
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

setup();



/*
  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
