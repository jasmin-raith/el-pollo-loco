class Bottle extends MovableObject {
    y = 330;
    height = 100;


    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');

        this.x = Math.random() * 2200; 
        this.animate();
    }

    animate() {

    }
}