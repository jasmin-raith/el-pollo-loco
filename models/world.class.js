class World {
    chracter = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    
    setWorld() {
        this.chracter.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowableObjects();
        }, 200);
    }

    checkThrowableObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.chracter.x + 100, this.chracter.y + 100);
            this.throwableObject.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.chracter.isColliding(enemy)) {
                this.chracter.hit();
                this.statusBar.setPercentage(this.chracter.energy);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); 
        // ------ space for fixed objects ------ 
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);   

        this.addToMap(this.chracter);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.items);
        this.addObjectsToMap(this.throwableObject);

        this.ctx.translate(-this.camera_x, 0);



        // draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        } 
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);   // verschiebt das Bild
        this.ctx.scale(-1, 1);             // spiegelt das Bild
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}