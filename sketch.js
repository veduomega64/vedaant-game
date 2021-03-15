var database,canvas;
var gamestate = 0;
var playerCount,form,game,player;
var allPlayers;
var car1,car2,car3,car4;
var cars
var car1i,car2i,car3i,car4i,track,ground;
function preload(){
    car1i = loadImage("immages/car1.png");
    car2i = loadImage("immages/car2.png");
    car3i = loadImage("immages/car3.png");
    car4i = loadImage("immages/car4.png");
    track = loadImage("immages/track.jpg");
    ground = loadImage("immages/ground.png");
}

function setup(){
   canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
game = new Game();
game.getstate();
game.start();

}

function draw(){
    if(playerCount ===4){
        game.update(1);
    } 
    if(gamestate === 1){ 
        clear();
         game.play();
     }
     if(gamestate === 2){
         game.end();
     }
}

