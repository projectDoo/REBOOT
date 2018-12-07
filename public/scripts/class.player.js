class Player extends Parent {
    constructor(x, y, width, height, image, name) {
        super(x, y, width, height, image);
        this.xDelta = 0;
        this.yDelta = 0;
        this.name = name;
        this.score = 0;
        this.dead = false;
        this.score = 0;
        this.energy = 101;
    }

    update() {
        this.move();
        this.collision();
    }

    move() {


        if ((this.x + this.width < cnv.width && this.xDelta > 0) || (this.x > 0 && this.xDelta < 0))
            this.x += this.xDelta;

        if ((this.y > toolBarHeight && this.yDelta < 0) || (this.y + this.height < cnv.height && this.yDelta > 0))
            this.y += this.yDelta;

        this.energy-= 0.07;
        this.score++;
        if(this.energy <= 0){
            this.dead = true;
        }
    }

    collision() {
        for (let i = 0; i < enemyArr.length; i++) {
            let obj = enemyArr[i];

            const distance = dist(this.x + this.width / 2, this.y + this.height / 2,
                obj.x + obj.width / 2, obj.y + obj.height / 2)
            if (distance < this.width / 2 + obj.width / 2) {
                this.dead = true;

            }
        }
    }
}
player = new Player(cnv.width / 2, cnv.height / 2, playerWidth, playerHeight, playerImage, "");