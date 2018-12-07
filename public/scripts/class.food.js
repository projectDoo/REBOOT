class Food extends Parent {
    constructor(x, y, width, height, image) {
        super(x, y, width, height, image);
    }

    collision (obj) {
        if (Math.abs((obj.x + obj.width / 2) - (this.x + this.width / 2)) < this.width / 2 + obj.width / 2 &&
            Math.abs(obj.y + obj.height / 2 - (this.y + this.height / 2)) < obj.height / 2 + this.height / 2) {
                foodArr.splice(foodArr.indexOf(this), 1);
                player.energy = player.energy < 90? player.energy + 10 : 100;   
                player.score += 200;   
                setTimeout(function(){
                foodArr.push(new Food(rand(cnv.width - foodWidth), rand(cnv.height - toolBarHeight - foodHeight) + toolBarHeight, foodWidth, foodHeight, foodImage));
                }, 2000);
                
        }

    }

    update(){
        this.collision(player);
    }
}
for (let i = 0; i < numberoffoods; i++) {
    foodArr.push(new Food(rand(cnv.width - foodWidth), rand(cnv.height - toolBarHeight - foodHeight) + toolBarHeight, foodWidth, foodHeight, foodImage));
}

