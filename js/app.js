// Create list that holds cards
const cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
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

// Create and display cards on page
for (let i = 0; i < cards.length; i++) {
// Loop through each card and create its HTML
  const cardElement = document.createElement("li");
//cardElement.classList.add("show");
  cardElement.classList.add("card");
// Display icons
  var cardType = cards[i];
  var cardIcon = icons[cardType];
  cardElement.innerHTML = `<i class="fa fa-${cardIcon}"></i>`;
  deck.appendChild(cardElement);
// Set up event listener for a cards



}

/*
 *   -
 *   - add each card's HTML to the page
 */

//  - shuffle the list of cards using the provided "shuffle" method below

// clear out any cards already in deck element to support refresh button

// set up the event listener for a card.

// cardElement.classList.add("show");

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




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
