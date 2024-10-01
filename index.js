function startGame () {
  var player1nameinput = prompt("Enter Player 1 name");
  var player2nameinput = prompt("Enter Player 2 name");

  var player1name = player1nameinput.charAt(0).toUpperCase() + player1nameinput.slice(1);
  var player2name = player2nameinput.charAt(0).toUpperCase() + player2nameinput.slice(1);


  localStorage.setItem("player1name", player1name);
  localStorage.setItem("player2name", player2name);

  window.location.href='./index2.html' 
}

function gameStart() {
  var player1name = localStorage.getItem("player1name");
  var player2name = localStorage.getItem("player2name");

  document.getElementById("player1name").innerHTML = player1name;
  document.getElementById("player2name").innerHTML = player2name;

}

const audio = new Audio();
audio.src = "./sounds/dice-roll.mp3";

function clearLocalStorage() {
    localStorage.clear();
}

function resetGame () {
  window.location.href='./index.html'
}
  


function playGameScore() {    
  
  
  var player1name = localStorage.getItem("player1name");
  var player2name = localStorage.getItem("player2name");
  
  
  document.getElementById("playButton").innerHTML = "Reroll Dice";

var player1score = Math.floor(Math.random() * 6) + 1;
var player2score = Math.floor(Math.random() * 6) + 1;

localStorage.setItem("player1score", player1score);
localStorage.setItem("player2score", player2score);  
 
 if ( player1score === 1 ) {
  document.getElementById("player1diceface1").style.visibility = "visible";
  document.getElementById("player1result").innerHTML = " Rolled: " + player1score;
  
 }  
 
 else if ( player1score !== 1) {
  document.getElementById("player1diceface1").style.visibility = "hidden";
 }
 
 if ( player1score === 2 ) {
  document.getElementById("player1diceface2").style.visibility = "visible";
  document.getElementById("player1result").innerHTML = " Rolled: " + player1score;
  
 }  
 
 else if ( player1score !== 2) {
  document.getElementById("player1diceface2").style.visibility = "hidden";
 }

 if ( player1score === 3 ) {
  document.getElementById("player1diceface3").style.visibility = "visible";
  document.getElementById("player1result").innerHTML = " Rolled: " + player1score;
  
 }  
 
 else if ( player1score !== 3) {
  document.getElementById("player1diceface3").style.visibility = "hidden";
 }

 if ( player1score === 4 ) {
  document.getElementById("player1diceface4").style.visibility = "visible";
  document.getElementById("player1result").innerHTML = " Rolled: " + player1score;
  
 }  
 
 else if ( player1score !== 4) {
  document.getElementById("player1diceface4").style.visibility = "hidden";
 }

 if ( player1score === 5 ) {
  document.getElementById("player1diceface5").style.visibility = "visible";
  document.getElementById("player1result").innerHTML = " Rolled: " + player1score;
  
 }  
 
 else if ( player1score !== 5) {
  document.getElementById("player1diceface5").style.visibility = "hidden";
 }

 if ( player1score === 6 ) {
  document.getElementById("player1diceface6").style.visibility = "visible";
  document.getElementById("player1result").innerHTML = " Rolled: " + player1score;
  
 }  
 
 else if ( player1score !== 6) {
  document.getElementById("player1diceface6").style.visibility = "hidden";
 }

// player2score

 if ( player2score === 1 ) {
  document.getElementById("player2diceface1").style.visibility = "visible";
  document.getElementById("player2result").innerHTML = " Rolled: " + player2score;
  
 }  
 
 else if ( player2score !== 1) {
  document.getElementById("player2diceface1").style.visibility = "hidden";
 }
 
 if ( player2score === 2 ) {
  document.getElementById("player2diceface2").style.visibility = "visible";
  document.getElementById("player2result").innerHTML = " Rolled: " + player2score;
  
 }  
 
 else if ( player2score !== 2) {
  document.getElementById("player2diceface2").style.visibility = "hidden";
 }

 if ( player2score === 3 ) {
  document.getElementById("player2diceface3").style.visibility = "visible";
  document.getElementById("player2result").innerHTML = " Rolled: " + player2score;
  
 }  
 
 else if ( player2score !== 3) {
  document.getElementById("player2diceface3").style.visibility = "hidden";
 }

 if ( player2score === 4 ) {
  document.getElementById("player2diceface4").style.visibility = "visible";
  document.getElementById("player2result").innerHTML = " Rolled: " + player2score;
  
 }  
 
 else if ( player2score !== 4) {
  document.getElementById("player2diceface4").style.visibility = "hidden";
 }

 if ( player2score === 5 ) {
  document.getElementById("player2diceface5").style.visibility = "visible";
  document.getElementById("player2result").innerHTML = " Rolled: " + player2score;
  
 }  
 
 else if ( player2score !== 5) {
  document.getElementById("player2diceface5").style.visibility = "hidden";
 }

 if ( player2score === 6 ) {
  document.getElementById("player2diceface6").style.visibility = "visible";
  document.getElementById("player2result").innerHTML = " Rolled: " + player2score;
  
 }  
 
 else if ( player2score !== 6) {
  document.getElementById("player2diceface6").style.visibility = "hidden";
 }

}


  


function playGameResult() {      
  
  var player1name = localStorage.getItem("player1name");
  var player2name = localStorage.getItem("player2name");
  var player1score = localStorage.getItem("player1score");
  var player2score = localStorage.getItem("player2score"); 
  

  if (player1score > player2score) {
    document.getElementById("gameResult").innerHTML = player1name + " WINS! ";       
      
  } 
  
  else if ( player1score < player2score) {
    document.getElementById("gameResult").innerHTML =  player2name + " WINS!";
  } 
  
  else if ( player1score === player2score) {
    document.getElementById("gameResult").innerHTML = player1name + " and " + player2name + " TIE!";
  }   

}    


