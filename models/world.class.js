class World {
    chracter = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    ctx;

    constructor() {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }



    draw() {
        this.ctx.drawImage(this.chracter.img, this.chracter.x, this.chracter.y, this.chracter.width, this.chracter.height);
    }
}