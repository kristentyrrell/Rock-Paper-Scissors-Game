var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < (1/3)) {
	computerChoice = "rock";
} else if(computerChoice >= (2/3)) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return("The result is a tie!");
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return("rock wins");
        } else {
            return("paper wins");
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return("paper wins");
        } else {
            return("scissors wins");
        }
    } else {
        if (choice2 === "paper") {
            return("scissors wins");
        } else {
            return("rock wins");
        }
    }
}

compare(userChoice,computerChoice)
