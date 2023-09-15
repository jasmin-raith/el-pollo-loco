class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;


    loadImage(path) {
        this.img = new Image();  // this.img = document.getElementById('image')  <img id="image" src>
        this.img.src = path;
    }
     
    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {

    }

    moveLeft() {
        setInterval(() => {    // 60 mal pro Sekunde wird das Objekt um 0.15 Pixel nach links verschoben
            this.x -= this.speed;          
        }, 1000 / 60);
    }
}