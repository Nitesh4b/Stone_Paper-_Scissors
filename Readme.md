# Rock, Paper, Scissors Game

A simple Rock, Paper, Scissors game implemented using HTML, CSS, and JavaScript. This game allows users to play against the computer, with the results displayed on the screen along with the current score.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [How to Play](#how-to-play)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can try out the game [here](https://nitesh4b.github.io/Stone_Paper_Scissors/Index).

## Features

- Interactive UI to select Rock, Paper, or Scissors.
- Displays the result of each round.
- Keeps track of the user's and computer's scores.
- Color-coded messages to indicate win, loss, or draw.

## How to Play

1. Click on one of the three choices: Rock, Paper, or Scissors.
2. The computer will randomly select its choice.
3. The result will be displayed, showing whether you won, lost, or it was a draw.
4. Scores will be updated accordingly.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/rock-paper-scissors.git
    ```

2. Navigate to the project directory:

    ```bash
    cd rock-paper-scissors
    ```

## Usage

1. Open the `index.html` file in your web browser:

    ```bash
    open index.html
    ```

2. Start playing by clicking on your choice (Rock, Paper, or Scissors).

## Code Overview

### HTML

The HTML file contains the structure of the game including buttons for Rock, Paper, and Scissors, and a section to display the result and scores.

### CSS

The CSS file is used for styling the game interface, making it visually appealing and user-friendly.

### JavaScript

The JavaScript file contains the game logic:

- Generates the computer's choice.
- Determines the winner based on the rules of the game.
- Updates the score and displays the result.

### Key Functions

- `genCompChoice()`: Generates a random choice for the computer.
- `determineWinner(userChoice, compChoice)`: Determines the winner based on user and computer choices.
- `displayWinner(winner, userChoice, compChoice)`: Updates the UI with the result and scores.
- `playGame(userChoice)`: Main function to run the game.
- `handleChoiceClick(choiceElement)`: Handles the user's click event on a choice.

### Event Listeners

Event listeners are added to each choice button to handle user interactions and initiate the game logic.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
