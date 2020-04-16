import Player from "./player.js";
import Input from "./inputs.js";
import Lineone from "./line1.js";
import Linetwo from "./line2.js";
import Linethree from "./line3.js";
import Obstacle from "./obstacles.js";
import RightObstacle from "./rightObs.js";
// ---------- CANVAS -----------------------------
let canvas = document.getElementById("theGame");
let ctx = canvas.getContext("2d");

const game_width = 500;
const game_height = 325;
//---------------------------OBSTACLES-----------------------//
let gameLoopId; 

var ypositions = [50, 162.5, 275];
var randomPosy = Math.floor(Math.random() * ypositions.length);
let randomY = ypositions[randomPosy];

// ---------- NEW OBJECTS -----------------------------
let player = new Player(game_width, game_height);
let lineone = new Lineone(game_width, game_height);
let linetwo = new Linetwo(game_width, game_height);
let linethree = new Linethree(game_width, game_height);
let input = new Input(player);
// let obstacle = new Obstacle(game_width, game_height, randomY);
//-----------TIMER----------------------------------
let seconds = 0;
let scoreCounter = document.querySelector("#navbar");
function increment() {
  seconds += 1;
  scoreCounter.innerText = seconds;
}
let timer; 
let rightObstacle;
let leftObstacle;


function startGame(){
  timer = setInterval(increment, 1000);
  rightObstacle = setInterval(addRightObs, 800);
  leftObstacle = setInterval(addObstacle, 725);
  gameLoop()
}
// let timer = setInterval(increment, 1000);
//---------------------- SPAWN OBSTACLES--------------
let obstacles = [];
function addObstacle() {
  var randomPosy = Math.floor(Math.random() * ypositions.length);
  let randomY = ypositions[randomPosy];
  obstacles.push(new Obstacle(game_width, game_height, randomY));
}

let rightObstacles = [];
function addRightObs() {
  var randomPosy = Math.floor(Math.random() * ypositions.length);
  let randomY = ypositions[randomPosy];
  rightObstacles.push(new RightObstacle(randomY));
}

// let rightObstacle = setInterval(addRightObs, 800);
// let leftObstacle = setInterval(addObstacle, 725);
// ---------- TIME -----------------------------
let lastTime = 0;
// ---------- GAME LOOP-----------------------------
function gameLoop(timestamp) {
  console.log("restarting");
  gameLoopId = requestAnimationFrame(gameLoop);


  
  let dTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 500, 300);
  player.update(dTime);
  // obstacle.update(dTime);
  player.draw(ctx);
  lineone.draw(ctx);
  linetwo.draw(ctx);
  linethree.draw(ctx);
  // obstacle.draw(ctx);
  obstacles.forEach(obs => {
    obs.update(dTime);
    obs.draw(ctx);
    let collision = obs.detectCollision(player);
    if (collision === true) {
      gameOver();
    }
  });

  rightObstacles.forEach(robs => {
    robs.update(dTime);
    robs.draw(ctx);
    robs.detectCollision(player);
    let collision = robs.detectCollision(player);
    if (collision === true) {
      gameOver();
    }
  });
  

}

function gameOver() {
  clearInterval(leftObstacle);
  clearInterval(rightObstacle);
  clearInterval(timer);
  obstacles = [];
  rightObstacles = [];
  seconds = 0;
  cancelAnimationFrame(gameLoopId);
  console.log('gameovee', gameLoopId)
  setTimeout(startGame, 3000)

}
// ---------- START GAME -----------------------------
startGame();
