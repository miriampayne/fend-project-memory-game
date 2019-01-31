/*
 * Create list that holds cards
 */
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

/*
 * Setup
 */
const setup = function() {
  let openedCards = [];
  let matchedCards = [];
  let clockOn = false;
  let currentSeconds = 0;
  let starCount = 3;
  let moves = 0;

/*
 * Initialize game
 */
  function init() {
    resetTimer();
    refreshDeck();

    // Create cards
    for (let i = 0; i < cards.length; i++) {
      // Loop through each card and create its HTML
      const cardElement = document.createElement("li");
      cardElement.classList.add("card");
      // Display the card's symbol
      const cardType = cards[i];
      const cardIcon = icons[cardType];
      cardElement.innerHTML = `<i class="fa fa-${cardIcon}"></i>`;
      deck.appendChild(cardElement);
      // Add click event to each card
      click(cardElement);
    }
  };

/*
 * Click Event
 */
  function click(cardElement) {
    // Event listener for a card
      cardElement.addEventListener("click", function() {

        if (!clockOn) {
          startTimer();
        }

        const currentCard = this;
        const previousCard = openedCards[0];

        // Prevent same card being clicked twice
        if(currentCard === previousCard) {
          return;
        }
          // Existing open card
          if(openedCards.length === 1) {
            currentCard.classList.add("open", "show");
            console.log("open current card", currentCard)
            // Save opened cards
            openedCards.push(this);
            // Compare 2 opened cards
            compare(currentCard, previousCard);
          } else {
              // No open cards
              currentCard.classList.add("open", "show");
              // Save opened cards
              openedCards.push(this);
          }
      });
    }

/*
 * Compare 2 cards
 */
    function compare(currentCard, previousCard) {
      console.log("current card", currentCard.innerHTML)
      console.log("previousCard", previousCard.innerHTML)
      // Matcher
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

        // Wait 500ms, then action:
        setTimeout(function() {
          // No match - if the cards do not match, remove the cards from the list and hide the card's symbol
          currentCard.classList.remove("open", "show");
          previousCard.classList.remove("open", "show");
          // Reset opened cards for when no match
          openedCards = [];
        }, 500);
      }
    }

/*
 * Game Over
 */
    function gameOver() {

        if(matchedCards.length === (icons.length * 2)) {
          //console.log("Game Over!")
          stopTimer();
          setTimeout(() => {
            alert ("🎉🎉 CONGRATULATIONS!!! 🎉🎉 \n\n You've won the game in " + currentSeconds + " seconds with " + starCount + " stars, nice work! \n\n Would you like to play again?");
          },1000)
        }
    }

/*
 * Set Timer
 */
    function incrementTimer() {
      currentSeconds++;
      updateTimerDisplay();
    }

    function resetTimer() {
      clockOn = false;
      currentSeconds = 0;
      updateTimerDisplay();
    }

    function updateTimerDisplay() {
      const timerElement = document.querySelector(".timer");
      timerElement.innerHTML = currentSeconds;
    }

    function startTimer() {
      resetTimer();
      clockOn = true;
      setTimerTimeout();
    }

    function setTimerTimeout() {
        setTimeout(() => {
          if(clockOn) {
            incrementTimer();
            setTimerTimeout();
          }
        }, 1000);
    }

    function stopTimer() {
      clockOn = false;
    }

/*
 * Move Counter
 */
    function moveCounter() {
      const movesElement = document.querySelector(".moves")
      movesElement.innerHTML = 0;
      function incrementCount() {
        moves++;
        movesElement.innerHTML = moves;
        // Set rating
        starRating();
      }
    }

/*
 * Star Rating
 */
    function starRating() {
      const starsElement = document.querySelector(".stars");
      // let starCount = starsElement.innerHTML;
      starsElement.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
      function starRating() {
        if(moves === 14) {
          starCount = 2;
          starsElement.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
          // console.log("Loose first star")
        } else if(moves === 22) {
          starCount = 1;
          starsElement.innerHTML = `<li><i class="fa fa-star"></i></li>`;
          // console.log("Loose second star")
        }
      }
    }

/*
 * Refresh Deck
 */
    function refreshDeck() {
      const restartElement = document.querySelector(".restart");
      restartElement.addEventListener("click",function() {
        // clear out any cards already in deck element to support refresh button
        deck.innerHTML = "";
        // Call 'init' to rebuild deck
        init();
        // Reset any related variables
        matchedCards = [];
        moves = 0;
        movesElement.innerHTML = moves;
        starCount = 3;
        starsElement.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
      });
    }
    // Start Game for first time
    init();
  };

/*
 * Shuffle
 */
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
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
