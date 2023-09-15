class Character extends MovableObject {
    y = 140;
    height = 300;
    width = 140;
    speed = 10;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    world;

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT)
            this.x += this.speed;

            if (this.world.keyboard.LEFT)
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length;  // Beispiel: let i = 0 % 6 => 0, Rest 5  // let i = 1 % 6 => 1, Rest 4  // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5 ....
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++
            }
        }, 50);
    }

    jump(){

    }
}