// declarations
const choices = ["ROCK", "PAPER", "SCISSORS"];
const outcomes = ["TIE", "LOSE", "WON"]

let roundsPlayed = 0;

let pScore = 0;
let cScore = 0;

let playerInput = 0;
let computerInput = 0;




// UI logic

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        //alert(button.id);
        // assign the player's input from the button
        for (let i = 0; i < choices.length; i++) {
            if (choices[i] === button.id.toUpperCase()) {
                playerInput = i
            }
        }

        // trigger playing a round of the game
        playRound(playerInput, getComputerChoice())
    });
});


// the game itself


function getComputerChoice() {
    let i = Math.floor(Math.random() * 3)
    return i
}

function playRound(playerSelection, computerSelection) {
    //let difference = Math.abs((playerSelection - computerSelection))
    let difference = getOutcome(playerSelection, computerSelection);

    let message = "You: [" + choices[playerSelection] + "] \nCPU: [" + choices[computerSelection] + "]\nOutcome: "

    switch (difference) {
        case 0:
            message += "Tied!"
            break;
        case 1:
            message += "You lose! :("
            cScore++;
            break;
        case 2:
            message += "You win! :D"
            pScore++;
            break;
    }
    //console.log(message)
    roundsPlayed++;

    updateScoreboard(message);

    return true
}

function getOutcome(p1, p2) {
    let difference = ((p2 - p1 + 3)) % 3;

    return difference
}

function updateScoreboard(message = "") {
    document.getElementById('pScore').textContent = pScore;
    document.getElementById('cScore').textContent = cScore;
    document.getElementById('roundsPlayed').textContent = roundsPlayed;

    let note = document.getElementById('outcomeText');
    note.textContent = message;
}

function playEntireGame(autoPlay = true) {

    while (pScore < 3 && cScore < 3) {
        // get both player's input
        playerInput = 0 //prompt goes here, but...
        computerInput = getComputerChoice()

        if (autoPlay == false) {
            userInput = prompt("Rock paper scissors!");
            if (userInput != null) {
                for (let i = 0; i < choices.length; i++) {
                    if (choices[i] === userInput.toUpperCase()) {
                        playerInput = i
                    }
                }
            }
        }

        let outcome = getOutcome(playerInput, computerInput)

        playRound(playerInput, computerInput)

        if (outcomes[outcome] === "WON"){
            pScore +=1
        }
        else if (outcomes[outcome] === "LOSE") {
            cScore +=1
        }

        console.log("Player: [" + pScore + "] / CPU: [" + cScore + "]")


    }
}

//playEntireGame()