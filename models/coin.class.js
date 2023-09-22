class Coin extends MovableObject {
    y = 320;
    height = 150;
    width = 150;


    constructor() {
        super().loadImage('img/8_coin/coin_1.png');

        this.x = Math.random() * 2200;
        this.animate();
    }

    animate() {

    }
}