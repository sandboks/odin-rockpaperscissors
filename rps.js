const choices = ["ROCK", "PAPER", "SCISSORS"];
const outcomes = ["TIE", "LOSE", "WON"]

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3)
    return i
}

function playRound(playerSelection, computerSelection) {
    let difference = Math.abs((playerSelection - computerSelection))

    let message = "You: [" + choices[playerSelection] + "] \nCPU: [" + choices[computerSelection] + "]\nOutcome: "

    switch (difference) {
        case 0:
            message += "Tied!"
            break;
        case 1:
            message += "You lose! :("
        break;
        case 2:
            message += "You win!"
            break;
    }
    console.log(message)

    return true
}

function getOutcome(p1, p2) {
    let difference = Math.abs((p1 - p2))

    return difference
}

function game(autoPlay = true) {
    let pScore = 0
    let cScore = 0

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

game()