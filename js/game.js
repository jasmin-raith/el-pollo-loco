let canvas;
let ctx;
let chracter = new Image();


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    chracter.src = '../img/2_character_pepe/2_walk/W-21.png';

    ctx.drawImage(chracter, 20, 20, 50, 150);
}