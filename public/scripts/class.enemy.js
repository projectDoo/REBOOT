class Enemy extends Parent {
    constructor(x, y, width, height, image, numberofenemies) {
        super(x, y, width, height, image);
        this.xDelta = rand(4);
        this.yDelta = rand(4);
    }

    update() {
        this.move();
        this.xDelta += 0.001 * this.xDelta/7 *  rand(4);
        this.yDelta += 0.001 * this.yDelta/7* rand(4);
        if (this.xDelta > 0) {
            this.image = enemyImage;
        }
        else {
            this.image = enemyImageF;
        }
    }

    move() {
        if (this.x < 0 || this.x > cnv.width - this.width) {
            this.xDelta *= -1;
            if(this.xDelta > 0){
                this.image = enemyImage;
            }
            else{
                this.image = enemyImageF;
            }
        }

        if (this.y < toolBarHeight || this.y > cnv.height - this.height) {
            this.yDelta *= -1;
        }
        if(this.y < toolBarHeight){
            this.y = this.y + 7;
        }
        if(this.x < 0){
            this.x = this.x + 7;
        }
        if(this.x > cnv.width-this.width){
            this.x = this.x - 7;
        }
        if(this.y > cnv.height-this.height){
            this.y = this.y - 7;
        }
        this.x += this.xDelta;
        this.y += this.yDelta;
    }
    
}
for (let i = 0; i < numberofenemies; i++) {
    let coords = getRandCoords();
    enemyArr.push(new Enemy(coords.x, coords.y, enemyWidth, enemyHeight, enemyImage));
} 
