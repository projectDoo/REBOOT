const socket = io.connect('http://localhost:3000');
const cnv = document.getElementById("main");
const ctx = cnv.getContext("2d");
cnv.width = document.body.clientWidth - 20;
cnv.height = document.body.clientHeight - 20;
let res;
let objWidth = 30;
let scoreArr = [];
let scale;
const rand = function (n) {
    return Math.floor(Math.random() * n) + 1;
}

socket.on("results", function (data) {
    res = data.scores;
    for(let i = 0; i <res.length; i++){
        scoreArr.push(res[i].score);
    }
    scale = cnv.height/Math.max(...scoreArr);
    for (let i = 0; i < res.length; i++) {
        ctx.fillStyle = "rgb(" + (rand(200) + 50) + ", " + (rand(200) + 50) + ", " + (rand(200) + 50) + ")"
        ctx.fillRect(i * cnv.width / res.length, cnv.height - scale*res[i].score, cnv.width / res.length, scale*res[i].score);
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.font = "20px Arial";
        ctx.fillText(res[i].name, i * cnv.width / res.length + (cnv.width / res.length)/3 , cnv.height - 100 - (scale*res[i].score)/2);
    }
});


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        location.href = "/";
    }
}, false);
