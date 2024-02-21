/* The Ingredients
 Rock
 Paper
 Scissors
*/
/* Would it be better to use different variables for all three?
    Or would it be better to use an array? */    

    const choices = ["rock", "paper", "scissors"];
// The computer and the user...

// Html Variables
const rock_btn = document.querySelector('#rock-button');
const paper_btn = document.querySelector('#paper-button');
const scissors_btn = document.querySelector('#scissors-button');
let user_score = document.querySelector('#user-score div');
let ai_score = document.querySelector('#ai-score div')
let start_round = document.querySelector('#start-round');
let end_round = document.querySelector('#end-round');
let game = document.querySelector('#game');
let reload = document.querySelector('#reload');
let remarks = document.querySelector('#remarks');

score_user = 0;    
score_ai = 0;



// The computer makes its choice among the three 
    let getComputerChoice = () => {
        // get an index
        const choice_index = Math.floor(Math.random() * 3);
        // get a choice
        const computer_choice = choices[choice_index];

        return computer_choice;
    };



// function to check who wins a round...
const game_winner = (event) => {
/* The user also makes its choice among the three
Ask the user for his choice */

let computer = getComputerChoice();
let player =  event.target.className;
let winner;
switch(true) {
    /* If rock meets Paper
    Paper wins */
    case player == "rock" && computer == "paper":
        winner = "You lose! Paper beats Rock"
        break;
    case player == "paper" && computer == "rock":
        winner = "You win! Paper beats Rock"
        break;
    /* If Rock meets Scissors,
    Rock wins */
    case player == "rock" && computer == "scissors":
        winner = "You win! Rock beats Scissors"
        break;
    case player == "scissors" && computer == "rock":
        winner = "You lose! Rock beats Scissors"
        break;
    /* If Paper meets Scissors,
    Scissors wins */
    case player == "paper" && computer == "scissors":
        winner = "You lose! Scissors beats paper"
        break;
    case player == "scissors" && computer == "paper":
        winner = "You win! Scissors beats paper"
        break;
    // If same meet
    default:
        winner = "It's a tie!"
}
end_round.textContent = winner;

if (winner.charAt(4) == "w"){
    score_user += 1;
    
}
else if (winner.charAt(4) == "l") { 
    score_ai +=1;
}
ai_score.textContent = score_ai;
user_score.textContent = score_user;

if(score_ai == 5 || score_user == 5) {
    end_round.textContent = "GAME OVER";
    reload.textContent = "Reload to Start a new game...";
    if(score_ai > score_user) {
        game.textContent = "YOU LOSE!  "
        remarks.textContent = "Don't go playing Poker please, Your luck is to blame..."
    } 
    if(score_user > score_ai) {
        game.textContent = "YOU WIN!!!  "
        remarks.textContent = "You must be happy... You didn't do anything though, hahaha!"
    }
}
};


rock_btn.addEventListener('click', game_winner);
paper_btn.addEventListener('click', game_winner);
scissors_btn.addEventListener('click', game_winner);

