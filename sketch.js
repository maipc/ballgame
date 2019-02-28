const width = 850;
const height = 600;
const Size = 40;
let player, ball, ai;

let playerScore = 0;
let AIScore = 0;

function setup() { 
  createCanvas(width, height);
  player = new Player;
  ball = new Ball;
  ai = new AI;
} 

function draw() { 
  background('black');

  player.update();
  player.show();

  ball.show();
  ball.update();

  ai.update();
  ai.show();

  ball.scores();

  drawScores();
}

function drawScores() {
  let x1 = width/5;
  let x2 = width*4/5;
  let y = 50;
  fill('white');
  textSize(Size);
  text(playerScore, x1, y);
  text(AIScore, x2, y);
}