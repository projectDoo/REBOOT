const submitData = function (obj) {
    socket.emit("submit data", obj);
}

const rand = function (n) {
    return Math.floor(Math.random() * n) + 1;
}

const dist = function (x, y, x1, y1) {
    return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
}


const getRandCoords = function () {
    let randX = rand(cnv.width - enemyWidth);
    let randY = rand(cnv.height - enemyHeight - toolBarHeight) + toolBarHeight;
    while (((randX > player.x - 30 && randX < player.x + player.width + 30) && (randY > player.y - 30 && randY < player.y + player.height + 30))) {
        let randX = rand(cnv.width - enemyWidth);
        let randY = rand(cnv.height - enemyHeight - toolBarHeight) + toolBarHeight;
    }
    return { x: randX, y: randY };
}
const draw = function () {
    ctx.drawImage(backgroundImage, 0, 0, cnv.width, cnv.height);
    if(gameStyle == "Lilit"){
        ctx.fillStyle = "#21a79c";
    }
    else if(gameStyle == "Alice"){
        ctx.fillStyle = "#ffc873";
    }
    else if(gameStyle == "Suren"){
        ctx.fillStyle = "#9776cf";
    }
    else if(gameStyle == "Haykuhi"){
        ctx.fillStyle = "#f0524f";
    }
    else{
        console.log(player.image.src)
    }
    ctx.fillRect(0, 0, cnv.width, toolBarHeight);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "20px Arial";
    ctx.fillText("Name: " + player.name, cnv.width / 5, toolBarHeight / 3);
    ctx.fillStyle = "white";
    ctx.fillRect(2 * cnv.width / 5 - 10, toolBarHeight / 3 - 20, Math.floor(player.energy) * 2, 30);
    ctx.fillStyle = "black";
    ctx.fillText("Energy: " + Math.ceil(player.energy), 2 * cnv.width / 5, toolBarHeight / 3);
    ctx.fillText("Score: " + player.score, 3 * cnv.width / 5, toolBarHeight / 3);
    player.draw();
    for (let i = 0; i < enemyArr.length; i++) {
        enemyArr[i].draw();
    }
    for (let i = 0; i < foodArr.length; i++) {
        foodArr[i].draw();
    }

}
const update = function () {
    player.update();
    for (let i = 0; i < enemyArr.length; i++) {
        enemyArr[i].update();
    }
    for (let i = 0; i < foodArr.length; i++) {
        foodArr[i].update();
    }

}

document.addEventListener("keydown", function (event) {
    if (!gameStarted)
        gameStarted = true;
    if (event.keyCode === leftKey) {
        player.xDelta = -5;
    }

    if (event.keyCode === rightKey) {
        player.xDelta = 5;
    }

    if (event.keyCode === upKey) {
        player.yDelta = -5;
    }

    if (event.keyCode === downKey) {
        player.yDelta = 5;
    }
    if (event.keyCode === 13) {
        location.reload();
    }
    if (event.keyCode === 32 && player.dead) {
        location.href = "/";
    }

}, false);


document.addEventListener('keyup', function (event) {
    if (event.keyCode === leftKey || event.keyCode === rightKey) {
        player.xDelta = 0;
    }
    if (event.keyCode === upKey || event.keyCode === downKey) {
        player.yDelta = 0;
    }

}, false);

document.body.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
}, false);

document.addEventListener('contextmenu', event => event.preventDefault());

const mouseDown = function () {
    if (!gameStarted)
        gameStarted = true;
    if (event.button === 0) {
        player.xDelta = -5;
    }

    if (event.button === 2) {
        player.xDelta = 5;
    }

    if (event.button === 1) {
        player.yDelta = -5;
    }

    if (event.button === 4) {
        player.yDelta = 5;
    }
    console.log(event.button)
}
const mouseUp = function () {
    if (event.button === 0 || event.button === 2) {
        player.xDelta = 0;
    }

    if (event.button === 1 || event.button === 4) {
        player.yDelta = 0;
    }

}