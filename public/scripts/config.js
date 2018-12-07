//configuration stuff: var, const, let
var socket = io.connect('http://localhost:3000');
var player;
let gameStyle;
const playerImage = new Image();
playerImage.src = "images/Lilit_.png";
const enemyImage = new Image();
const enemyImageF = new Image();
enemyImage.src = "images/Lilit_enemy.png"; 
enemyImageF.src = "images/FLilit_enemy.png"; 
const foodImage = new Image();
foodImage.src = "images/Lilit_food1.png"; 
const backgroundImage = new Image();
backgroundImage.src = "images/back.jpg";
socket.on("gameData", function (data) {
    player.name = data.player.name;
    gameStyle = data.style;
    player.image.src = "images/" + data.style +"_.png";
    backgroundImage.src  = "images/" + data.style +"_bg.png";
    for(let i = 1; i <= 1; i++){
        foodArr[rand(foodArr.length)].image.src = "images/" + data.style + "_food"+i + ".png";
    }
    for(let i = 0; i < enemyArr.length ; i++){
        enemyArr[i].image.src = "images/"+ data.style+"_enemy.png";
        enemyImage.src = "images/"+ data.style+"_enemy.png";
        enemyImageF.src = "images/F"+ data.style+"_enemy.png";
    }
});

let gameStarted = false;
const enemyArr = [];
const foodArr = [];
let numberofenemies = 3;
let numberoffoods = 5;



const cnv = document.getElementById("main");
const ctx = cnv.getContext("2d");
cnv.width = document.body.clientWidth - 20;
cnv.height = document.body.clientHeight - 20;
const toolBarHeight = (document.body.clientHeight - 20)/9;
const playerHeight = 120; //these are just random numbers, we need to decide the sizes
const playerWidth = 120;
const enemyHeight = 75;
const enemyWidth = 75;
const foodHeight = 50;
const foodWidth = 50;

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;