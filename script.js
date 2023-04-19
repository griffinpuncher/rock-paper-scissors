document.addEventListener("DOMContentLoaded", function() {
        
    function playRound (playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            alert("You Win!");
        }
        else {
            alert("You lose!");
        }
    }
    
    function getComputerChoice () {
        let choiceNum = Math.floor(Math.random() * 3) + 1;
        if (choiceNum === 1) {return "rock"}
        if (choiceNum === 2) {return "paper"}
        if (choiceNum === 3) {return "scissors"}
    }

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener('click', function() {playRound("rock",getComputerChoice())});
    paperButton.addEventListener('click', function() {playRound("paper", getComputerChoice())});
    scissorsButton.addEventListener('click', function() {playRound("scissors", getComputerChoice())});
})