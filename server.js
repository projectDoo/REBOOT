const fs = require('fs');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
let data;
const gameData = {};
const addScore = function (name, score) {
    const file = "stat.json";
    const object = JSON.parse(fs.readFileSync(file).toString());
    object.scores.push({ name: name, score: score });
    fs.writeFileSync(file, JSON.stringify(object));
    return object;
};

app.use(express.static("./public"));
app.get('/', function (req, res) {
    res.redirect('popup.html');
});
app.get('/play', function (req, res) {
    res.redirect('main.html');
    });
app.get('/scores', function (req, res) {
    res.redirect('scores.html');
});


server.listen(3000);


io.on('connection', function (socket) {
    socket.emit('gameData', gameData);
    socket.on("submit data", function (data) {
        addScore(data.name, data.score);
    });
    socket.on("player name", function (data) {
        gameData.player = {};
        gameData.player.name = data;
    });
    socket.on("chosen character", function (data) {
        if (data == 1){
            gameData.style = "Lilit";
        }
        else if(data == 2){
            gameData.style = "Alice";
        }
        else if(data == 3){
            gameData.style = "Suren";
        }
        else if(data == 4){
            gameData.style = "Haykuhi";
        }
        console.log(data.style)
        socket.emit("img", data.style)
    });

    fs.readFile('stat.json', function (err, data) {
        data = JSON.parse(data);
        socket.emit('results', data);
    });

});
