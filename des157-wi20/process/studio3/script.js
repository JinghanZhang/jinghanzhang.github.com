function start() {
    var main = document.getElementsByClassName("maincontainer");
    for(var i = 0; i < main.length; i++){
        main[i].style.display = "none";
    }
    var title = document.getElementsByTagName("h1");
    for(var i = 0; i < title.length; i++){
        title[i].style.display = "none";
    }
}

function display_rules(){
    var rules = document.getElementsByClassName("rules");
    for(var i = 0; i < rules.length; i++){
        rules[i].style.display = "block";
    }
}

function start2() {
    var rules = document.getElementsByClassName("rules");
    for(var i = 0; i < rules.length; i++){
        rules[i].style.display = "none";
    }
    var game = document.getElementsByClassName("game");
    for(var i = 0; i < game.length; i++){
        game[i].style.display = "block";
    }
}

(function(){
"use srtict";

const startGame = document.getElementById("startgame");
const gameControl = document.getElementById("gamecontrol");
const game = document.getElementById("game");
const score = document.getElementById("score");
const actionArea = document.getElementById("actions");

const gameData = {
    dice: ["images/1die.png", "images/2die.png", "images/3die.png",
           "images/4die.png", "images/5die.png", "images/6die.png"],
    players: ["Player 1", "Player 2"],
    score: [0,0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 100,
    //new: condition for ending game
    gameEnd2: -5
}

startGame.addEventListener("click", function(){
gameData.index = Math.round(Math.random());
gameControl.innerHTML = '<h2>The Game Has Started!</h2>';
gameControl.innerHTML += '<button id="quit">Quit?</button>';

document.getElementById('quit').addEventListener("click", function(){
    location.reload();
});

setUpTurn();
});

function setUpTurn(){
    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
    actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
    document.getElementById('roll').addEventListener("click", function(){

    throwDice();

});
    checkWinningCondition();
}

function throwDice(){
actionArea.innerHTML = '';
gameData.roll1 = Math.ceil(Math.random()*6);
gameData.roll2 = Math.ceil(Math.random()*6);
game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
                    <img src="${gameData.dice[gameData.roll2-1]}">`;
gameData.rollSum = gameData.roll1 + gameData.roll2;

// if two 1's are rolled...
if( gameData.rollSum === 2 ){
    game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
    gameData.score[gameData.index] = 0;
    gameData.index ? gameData.index = 0 : gameData.index = 1;

    setTimeout(function(){
        setUpTurn();
    }, 2000);
}
// new: if roll1 > roll2...
else if(gameData.roll1 > gameData.roll2){
    game.innerHTML +=`<p id = "double">You got double the score from this turn!!</p>`;
    gameData.score[gameData.index] = gameData.score[gameData.index] +  2 * gameData.rollSum;
    setTimeout(setUpTurn,2000);
}
// if either die is a 1...
else if(gameData.roll1 === 1 || gameData.roll2 === 1){
    gameData.index ? gameData.index = 0 : gameData.index = 1;
    game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to
         ${gameData.players[gameData.index]}</p>`;
    //new: lose points of roll1
    game.innerHTML += `<p id = "lose">You lose ${gameData.roll1} points :(</p>`;
    gameData.score[gameData.index] = gameData.score[gameData.index] - gameData.roll1;
    setTimeout(setUpTurn,2000);
}
// if neither die is a 1...
else {
    gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
    actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

    document.getElementById('rollagain').addEventListener("click", function(){ 
        throwDice();
    });

    document.getElementById('pass').addEventListener("click", function(){
        gameData.index ? gameData.index = 0 : gameData.index = 1;
        setUpTurn();
    });

    checkWinningCondition();
}
}

function checkWinningCondition(){
    if(gameData.score[gameData.index] > gameData.gameEnd){
        score.innerHTML = `<h2>${gameData.players[gameData.index]} 
        wins with ${gameData.score[gameData.index]} points!</h2>`;

        actionArea.innerHTML = '';
        document.getElementById('quit').innerHTML = "Start a New Game?";
    }
    //new: add new condition to end game
    else if (gameData.score[gameData.index] <= gameData.gameEnd2){
        score.innerHTML = `<h2>${gameData.players[gameData.index]} 
        lose with ${gameData.score[gameData.index]} points.</h2>`;

        actionArea.innerHTML = '';
        document.getElementById('quit').innerHTML = "Start a New Game?";
    }
    else{  
        showCurrentScore();
    }
}

function showCurrentScore(){
score.innerHTML = `<p id = "score">Current score: <br> ${gameData.players[0]}:
     ${gameData.score[0]} VS ${gameData.players[1]}:
     ${gameData.score[1]}</p>`;
}

}());