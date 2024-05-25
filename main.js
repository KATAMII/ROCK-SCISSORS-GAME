const computerscore_span = document.getElementById("compscore")
const playerscore_span = document.getElementById("playerscore")
const computer_choice_emoji = document.getElementById("computer-choice-emoji")
const winner_announcement1= document.getElementById("winner-announcement1")
const player_choice_emoji= document.getElementById("player-choice-emoji")

let playerscore = 0;
let computerscore = 0;

const choice = ['rock','paper','scissors']
const emoji = {
    rock: '✊',
    paper: '🖐',
    scissors: '✌'
};

function computerchoicegeter(){
    let randomchoice = Math.floor(Math.random()*3)
    return choice[randomchoice]
}
function determine_winner(playerchoice,computerchoice){
    if(playerchoice == computerchoice){
        return "Draw";
    } else if((playerchoice == "rock" && computerchoice == "scissors")||
        (playerchoice == "scissors"&& computerchoice == "paper")||
        (playerchoice == "paper"&& computerchoice == "rock")){
            return "PLAYER WINS";
    }else{
        return "COMPUTER WINS"
    } 
    
}

function game(playerchoice){
    const computerchoice = computerchoicegeter()
    const winner = determine_winner(playerchoice,computerchoice)
    if(winner == "PLAYER WINS"){
        playerscore = playerscore + 1;
        winner_announcement1.innerText ="PLAYER WINS"
    }
    else if(winner == "COMPUTER WINS"){
        computerscore = computerscore + 1;
        winner_announcement1.innerText ="COMPUTER WINS"
    } else{
        winner_announcement1.innerText ="DRAW"
    }

    playerscore_span.innerHTML = playerscore;
    computerscore_span.innerHTML = computerscore; 
    computer_choice_emoji.innerHTML = emoji[computerchoice] 
    player_choice_emoji.innerHTML = emoji[playerchoice]
}

document.getElementById("rock") .addEventListener('click',()=> game('rock'))
document.getElementById("paper") .addEventListener('click',()=> game('paper'))
document.getElementById("scissors") . addEventListener('click',()=> game('scissors'))
