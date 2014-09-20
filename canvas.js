//This is a javascript file that paints onto the canvas setup in the html file.
window.onload = function() {
    fillCanvas();
}

function fillCanvas() {
    var example = document.getElementById('example');
    var context = example.getContext('2d');
    context.fillStyle = 'red';
    context.fillRect(30, 30, 50, 50);

    console.log("Hello i am working");
}
