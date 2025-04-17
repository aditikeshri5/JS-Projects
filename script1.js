let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
    const a = ["rock" , "paper" , "scissor"];
const idx = Math.floor(Math.random()*3);
return a[idx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw"
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red";
    }};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
 if(userChoice === compChoice)
 {
    drawGame()
}
 else{
    let userWin = true;
    if (userChoice === "rock") {
   
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {

      userWin = compChoice === "scissors" ? false : true;
    } else {
     
      userWin = compChoice === "rock" ? false : true;
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
