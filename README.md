# Jump-To-Top-Button-for-Squarespace

This repository contains the code necessary to add a "Jump to Top" button in a Squarespace website. The button will appear after the user scrolls down a certain amount.

## Usage

This code is designed to be embedded into Squarespace sites. To embed the code, follow these steps:

1. Copy the code from this repository.
2. In your Squarespace editor, go to the desired page.
3. Add a Code block.
4. Paste the copied code into the Code block.
  4a. Ensure to add all of the below together inside of your SINGLE code block.
  - `index.html`: Contains the HTML structure for the "Jump to Top" button.
  - `main.js`: Contains the JavaScript logic for the "Jump to Top" button's functionality.
  - `styles.css`: Contains the CSS styles for the "Jump to Top" button.


## Components

The code contains three major components:

- HTML: Used to create the structure of the button.

- CSS: Used to style the button, such as its position, color, and hover effects.

- JavaScript: Used to add functionality to the button. It handles actions like appearing when the user scrolls down and jumping to the top of the page when clicked.

## Code Structure

- The HTML portion creates a button with an id of "topButton". The button contains two spans, one for an arrow symbol and another for the text "JUMP TO TOP".

- The CSS portion styles the button and adds transition and transformation effects.

- The JavaScript portion first sets the button's initial opacity to 0 (making it invisible). Then, as the user scrolls down, it calculates the scroll percentage and updates the button's opacity accordingly. When the button is clicked, it smoothly scrolls the page back to the top.

## Contributions

Contributions to this project are welcome! If you have a feature to add or a bug to fix, please create a pull request. For larger changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) license.
