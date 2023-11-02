/* The Ingredients
 Rock
 Paper
 Scissors
*/
/* Would it be better to use different variables for all three?
    Or would it be better to use an array? */    
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
    const choices = ["rock", "paper", "scissors"];
// The computer and the user...

// The computer makes its choice among the three 
    getComputerChoice = () => {
        // get an index
        const choice_index = Math.floor(Math.random() * 3);
        // get a choice
        const computer_choice = choices[choice_index];

        return computer_choice;
    };
/* The user also makes its choice among the three
    Ask the user for his choice */

/* If Rock meets Paper,
    Paper wins */

/* If Rock meets Scissors,
    Rock wins */

/* If Paper meets Scissors,
    Scissors wins */