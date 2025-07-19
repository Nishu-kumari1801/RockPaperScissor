let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorepara=document.querySelector('#user-score');
const computerScorepara=document.querySelector('#computer-score');

const genCompChoice=()=>{
    //rock,paper,scissor
    const options=['rock','paper','scissor'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawgame=()=>{
     msg.innerText = "It's a draw!";
        msg.style.backgroundColor = "#081b31";

};

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorepara.innerText = computerScore;
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playgame=(userchoice)=>{
    const computerChoice=genCompChoice();
    if(userchoice===computerChoice){
        drawgame();
    }else{
        let userWin=true;
        if(userchoice=="rock"){
            userWin= computerChoice==="paper"?false:true;
        }
        else if(userchoice=="paper"){
        userWin = computerChoice==="scissor"?false:true;
        }else{
            userWin= computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,computerChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    });
});