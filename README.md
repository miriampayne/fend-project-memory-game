# Memory Match Game

Browser-based matching game built with Vanilla JS, used to test and train memory skills. The game randomly shuffles the cards and a user wins once all cards have successfully been matched. The project was converted from a static one to an interactive one which required modifying the HTML and CSS files, but primarily the JavaScript file. Site deployed using [GitHub Pages](https://pages.github.com/)

## Table of Contents

* [Game-link](#game-link)
* [Instructions](#instructions)
* [Features](#features)
* [Dependencies](#dependencies)
* [Contributing](#contributing)

## Game-link

Link to live gaming webpage can be found [here](https://miriampayne.github.io/fend-project-memory-game/)

## Instructions

1. Start the game by clicking on any card, you'll see timer will start and an icon will be displayed.
2. Click on another random card (you can't click the same card twice) to see if you've got a match.
3. Keep clicking cards to find each symbol's pair. Every second card counts as a single move.
  - When you've matched two cards, they will be locked in the open position with a new colour to let you know.
  - If you didn't find a pair, both cards will be flipped closed again, hiding the symbols from view.
4. Try to find as many pairs in as few moves as possible to get a better score.
5. Keep playing! Start a new game by hitting refresh, or, if you've finished, by hitting the OK button in the congratulations notification.

## Features

**Timer**

When the player starts a game, a displayed timer should start. Once the player wins the game, the timer stops.

**Move Counter**

Game displays the current number of moves a user has made.

**Star Rating**

The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1).

The number of moves needed to change the rating is up to you, but it should happen at some point.

**Congratulations Popup**

When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

**Restart Button**

A restart button allows the player to reset the game board, the timer, and the star rating.

## Dependencies

- Both BootstrapCDN's [Font Awesome](https://www.bootstrapcdn.com/fontawesome/) and Google Font [Coda](https://fonts.google.com/specimen/Coda?selection.family=Coda&query=coda) rely on internet access.

- The star rating feature is called within the move counting function.

- It's important to note that the opening and closing of cards is actually expanding (showing) and minimising (hiding) the size within CSS.

- Also, the timeout in the congratulations pop-up alert is required for the call stack to show the last card before actioning the alert.

- Restarting the game successfully requires resetting of the entire state of variables

## Contributing

Pull requests welcome. For further details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
