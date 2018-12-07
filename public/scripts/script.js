//main file: here the code will run
const loop = function () {
    
        draw();
        update();
        if(!player.dead){
            requestAnimationFrame(loop);
        }
        else{
            submitData(player);
            openModal();    
        }

}

loop();