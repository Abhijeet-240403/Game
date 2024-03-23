let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
const options = ["Stone", "paper","scissor"];
const randIdx =  Math.floor(Math.random () * 3);
return options [randIdx];
};

const drawGame = () => {
 
 msg.innerText = "Game was Draw. Play Again  ";
 msg.style.backgroundColor = "grey";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost! ${compChoice}  beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
   
// generate computer choice 
const compChoice = genCompChoice();


if(userChoice === compChoice) {
    // draw game 
    drawGame();
} else{
    let userWin = true;
    if (userChoice === "Stone"){
        // scissor,paper
        userWin = compChoice === "paper" ? false : true;
} else if(userChoice === "paper"){
    // stone,scissors
    userWin = compChoice === "scissor" ? false : true;
} else {
// stone,paper
userWin = compChoice === "Stone" ? false : true;
}
showWinner(userWin, userChoice, compChoice);
}
};


choices.forEach((choice) => {
choice.addEventListener("click", () => {
const userChoice = choice.getAttribute("id");
playGame(userChoice);


    });
});
