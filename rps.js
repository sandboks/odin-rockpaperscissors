// declarations
const choices = ["ROCK", "PAPER", "SCISSORS"];
const outcomes = ["TIE", "LOSE", "WON"]

let roundsPlayed = 0;

let pScore = 0;
let cScore = 0;

let playerInput = 0;
let computerInput = 0;

let mostRecentRow = null;


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
    updateOutcomes(playerSelection, computerSelection, difference);

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

function updateOutcomes(p1, p2, outcome) {
    const container = document.querySelector('.outcomeDisplay');
    
    const newRow = document.createElement("ul");
    //pinkDiv.style.border = "1px solid black";
    //pinkDiv.style.backgroundColor  = "pink";

        let currentBox = document.createElement("li");
        currentBox.textContent = roundsPlayed;
        newRow.appendChild(currentBox);

        currentBox = document.createElement("li");
        currentBox.textContent = choices[p1];
        if (outcome == 2) {
            currentBox.style.backgroundColor = "greenyellow";
        }
        newRow.appendChild(currentBox);

        currentBox = document.createElement("li");
        currentBox.textContent = choices[p2];
        if (outcome == 1) {
            currentBox.style.backgroundColor = "salmon";
        }
        newRow.appendChild(currentBox);


    if (mostRecentRow != null) {
        container.insertBefore(newRow, mostRecentRow);
    }
    else {
        container.appendChild(newRow);
    }
    mostRecentRow = newRow;
    //console.log(mostRecentRow);

}