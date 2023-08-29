class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;


    loadImage(path) {
        this.img = new Image();  // this.img = document.getElementById('image')  <img id="image" src>
        this.img.src = path;
    }

    moveRight() {

    }

    moveLeft() {

    }
}