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

    const rock_btn = document.querySelector('#rock-button');
    const paper_btn = document.querySelector('#paper-button');
    const scissors_btn = document.querySelector('#scissors-button');
    let user_score = document.querySelector('#user-score div');
    let ai_score = document.querySelector('#ai-score div')
    let rounds = document.querySelector('#rounds');


// function to check whether who wins a round...
    const game_winner = (player, computer) => {
        /* The user also makes its choice among the three
        Ask the user for his choice */
        
        computer = getComputerChoice();
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
        rounds.textContent = winner;
        return winner;
    }





    // function to create a five round loop 
    const game = () => {     
        let player_score = 0;
        let computer_score = 0;
        user_score.textContent = player_score;
        ai_score.textContent = computer_score;
            if (round_result.charAt(4) == "w"){
                player_score += 1;
            }
            else if (round_result.charAt(4) == "l") { 
                computer_score +=1
            }
            console.log(round_result);
            console.log(`${player_score} : ${computer_score}`)
        }

        if (computer_score > player_score) {
            console.log("GAME OVER, YOU LOSE!")
        }
        else if (computer_score == player_score) {
            console.log("GAME OVER, YOU TIED! PLAY AGAIN")
        }
        else {
            console.log(`GAME OVER, YOU WIN!`)
        }

