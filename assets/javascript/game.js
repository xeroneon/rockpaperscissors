//computers array for available choices
var cpChoice = ["r", "p", "s"];
// variable to store random computer choice
var rand;

// console.log("rand", rand);
//vaiable to store the users choice
var uChoice;

var wins = 0;

var losses = 0;

var ties = 0;

//on key up if r s or p are pressed then fire this code
document.onkeyup = function (event) {
    if (event.key === "r" || event.key === "s" || event.key === "p") {
        uChoice = event.key;
        //this is to assign a random value from array cpChoice to varaible random to use as the computers choice
        rand = cpChoice[Math.floor(Math.random() * cpChoice.length)];
        console.log("uChoice", uChoice);
        console.log("rand", rand);
        //log what the users choice was
        if (uChoice === "r") {
            document.getElementById("user-choice").innerHTML = "Your Choice: Rock";
        }

        else if (uChoice === "p") {
            document.getElementById("user-choice").innerHTML = "Your Choice: Paper";
        }

        else {
            document.getElementById("user-choice").innerHTML = "Your Choice: Scissors";
        }
        //log what the computers choice was
        // document.getElementById("comp-choice").innerHTML = "Computers Choice: " + rand;
        if (rand === "r") {
            document.getElementById("comp-choice").innerHTML = "Computers Choice: Rock";
        }

        else if (rand === "p") {
            document.getElementById("comp-choice").innerHTML = "Computers Choice: Paper";
        }

        else if (rand === "s") {
            document.getElementById("comp-choice").innerHTML = "Computers Choice: Scissors";
        }

        //these are all possible outcomes and this code changes html to keep score of the game.
        if (uChoice === "r" && rand === "r") {
            ties++;
            document.getElementById("ties").innerHTML = "Ties: " + ties;
        }
        else if (uChoice === "r" && rand === "p") {
            losses++;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
        }
        else if (uChoice === "r" && rand === "s") {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
        }
        else if (uChoice === "p" && rand === "p") {
            ties++;
            document.getElementById("ties").innerHTML = "Ties: " + ties;
        }
        else if (uChoice === "p" && rand === "r") {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
        }
        else if (uChoice === "p" && rand === "s") {
            losses++;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
        }
        else if (uChoice === "s" && rand === "s") {
            ties++;
            document.getElementById("ties").innerHTML = "Ties: " + ties;
        }
        else if (uChoice === "s" && rand === "r") {
            losses++;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
        }
        else if (uChoice === "s" && rand === "p") {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
        }
    }
};