const width = 187, height = 119, borderThickeness = 8;

var animationCanvas, context, image;
var row = 0, col = 0;

document.addEventListener('DOMContentLoaded', () => {
    animationCanvas = document.getElementById('animation_canvas');
    context = animationCanvas.getContext('2d');
    image = document.createElement('img');
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Horse_in_Motion.jpg/800px-The_Horse_in_Motion.jpg"
    image.onload = draw;
});


function draw() {
    var clipRegion = new Path2D();
    clipRegion.rect(50, 50, width, height);
    context.clip(clipRegion);

    context.drawImage(image,
        36 - (width + borderThickeness) * col++,
        35 - (height + borderThickeness) * row);

    if (col > 3) {
        col = 0;
        row++;
    }

    if (col == 3 && row == 2) {
        col = 0;
        row = 0;
    }
    
    var fps = 15;

    var frameDuration = 1000 / fps;

    setTimeout(draw, frameDuration);
}