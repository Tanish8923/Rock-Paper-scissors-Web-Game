let userScrore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uScore = document.querySelector("#Uscore");
let cScore = document.querySelector("#Cscore");

const generateComputerChoice = () => {
    let options = ["rock" , "paper" , "scissor"];
    let autoGenIdx = Math.floor(Math.random() * 3);
    return options[autoGenIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again! ";
    msg.style.backgroundColor = "rgb(49, 46, 46)"
}

const userWin = (userChoice , computerChoice) => {
    msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green"
    userScrore++;
    uScore.innerText = userScrore;
}

const computerWin = (userChoice , computerChoice) => {
    msg.innerText = `You lose! ${computerChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red"
    computerScore++;
    cScore.innerText = computerScore;
}

const playGame = (userChoice) => {
    let computerChoice = generateComputerChoice();
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = computerChoice === "paper" ? false : true ; 
        }else if(userChoice === "paper"){
            userwin = computerChoice === "scissor" ? false : true ; 
        }else{
            userwin = computerChoice === "rock" ? false : true ; 
        }
        userwin ? userWin(userChoice , computerChoice) : computerWin(userChoice , computerChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        let userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    })
})