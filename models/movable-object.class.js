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

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;  // Beispiel: let i = 0 % 6 => 0, Rest 5  // let i = 1 % 6 => 1, Rest 4  // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5 ....
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveRight() {

    }

    moveLeft() {
        setInterval(() => {    // 60 mal pro Sekunde wird das Objekt um 0.15 Pixel nach links verschoben
            this.x -= this.speed;          
        }, 1000 / 60);
    }
}