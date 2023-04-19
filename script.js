document.addEventListener("DOMContentLoaded", function() {

    function game() {
        gameOn = true;
        winCount = 0;
        lossCount = 0;
        output.textContent = "Game started! First to 5 round wins is the CHAMP!!";
        output.style.backgroundColor = "black";
        output.style.color = "rgb(150, 57, 28)";
        wins.textContent = "Wins: " + winCount;
        losses.textContent = "Losses: " + lossCount;
    }

    function gameReset() {
        gameOn = false;
        output.style.backgroundColor = "black";
        output.style.color = "rgb(150, 57, 28)";
        wins.textContent = "";
        losses.textContent = "";
    }
        
    function playRound (playerSelection) {
        computerChoice = getComputerChoice();
        if ((playerSelection == "rock" && computerChoice == "scissors")
         || (playerSelection == "scissors" && computerChoice == "paper")
         || (playerSelection == "paper" && computerChoice == "rock")
         ) {
            output.textContent = "You Win, " + playerSelection + " beats " + computerChoice + "!";
            output.style.backgroundColor = "green";
            output.style.color = "black";
            if (gameOn) {winCount++; wins.textContent = "Wins: " + winCount}
        }
        else if (playerSelection == computerChoice) {
            output.textContent = "You tie, " + computerChoice + " draws against " + computerChoice + "!";
            output.style.backgroundColor = "yellow";
            output.style.color = "black";
        }
        else {
            output.textContent = "You lose, " + computerChoice + " beats " + playerSelection + "!";
            output.style.backgroundColor = "red";
            output.style.color = "white";
            if (gameOn) {lossCount++; losses.textContent = "Losses: " + lossCount}
        }

        if (gameOn) {
            if (winCount == 5) {
                output.textContent = "You're the Champion! Congrats on 5 wins!";
                gameReset();
            }
            else if (lossCount == 5) {
                output.textContent = "You lose! Better luck next time...";
                gameReset();
            }
        }
    }
    
    function getComputerChoice () {
        let choiceNum = Math.floor(Math.random() * 3) + 1;
        if (choiceNum === 1) {return "rock"}
        if (choiceNum === 2) {return "paper"}
        if (choiceNum === 3) {return "scissors"}
    }

    function getTextInput (answer) {
        answer = answer.toLowerCase();
        if (answer == "rock") {playRound("rock")}
        else if (answer == "paper") {playRound("paper")}
        else if (answer == "scissors") {playRound("scissors")}
        else {alert("Invalid Entry!")}
        submitInput.value = "";
    }

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const submitInput = document.getElementById("submit");
    const submitButton = document.getElementById("submit-button");
    const gameStart = document.querySelector("#game-start");
    const output = document.querySelector('.output');
    const wins = document.querySelector("#wins");
    const losses = document.querySelector("#losses");
    let gameOn = false;
    let winCount = 0;
    let lossCount = 0;

    rockButton.addEventListener('click', function() {playRound("rock")});
    paperButton.addEventListener('click', function() {playRound("paper")});
    scissorsButton.addEventListener('click', function() {playRound("scissors")});
    submitButton.addEventListener('click', function() {getTextInput(submitInput.value)});
    submitInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {getTextInput(submitInput.value)}
    });
    gameStart.addEventListener('click', function() {game()});

})