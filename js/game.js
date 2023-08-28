let canvas;
let ctx;
let chracter = new MovableObject();


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    console.log('My character is', chracter);
}