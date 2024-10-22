class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {   // Throwable objects sollten immer fallen
            return true;
        } else {
        return this.y < 140;
        }
    }


    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
               this.y + this.height > mo.y &&
               this.x < mo.x + mo.width &&
               this.y < mo.y + mo.height; 
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();   // zeigt Zeit in Zahlenform
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;   // Differenz in Millisekunden
        timepassed = timepassed / 1000;   // Differenz in Sekunden
        return timepassed < 1;
    }

    isDead() {
        if (this.energy == 0) {
            this.showGameOverScreen(); // Aufruf der Funktion zum Einblenden des Game Over Bildschirms
            return true;
        }
        return false;
    }

    showGameOverScreen() {
        const canvas = document.getElementById('canvas');
        const gameOverScreen = document.getElementById('gameOverScreen');

        // Position und Größe des Overlays auf das Canvas anpassen
        const rect = canvas.getBoundingClientRect();
        gameOverScreen.style.top = `${rect.top}px`;
        gameOverScreen.style.left = `${rect.left}px`;
        gameOverScreen.style.width = `${rect.width}px`;
        gameOverScreen.style.height = `${rect.height}px`;

        gameOverScreen.style.display = 'flex'; // Das Overlay einblenden
    }
     

    playAnimation(images) {
        let i = this.currentImage % images.length;  // Beispiel: let i = 0 % 6 => 0, Rest 5  // let i = 1 % 6 => 1, Rest 4  // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5 ....
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}