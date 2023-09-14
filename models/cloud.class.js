class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;  // Zahl zwischen 0 und 500
        this.animate();
    }


    animate() {
        setInterval(() => {    // 60 mal pro Sekunde werden die Wolken um 0.15 Pixel nach links verschoben
            this.x -= 0.15;          
        }, 1000 / 60);
    }
}