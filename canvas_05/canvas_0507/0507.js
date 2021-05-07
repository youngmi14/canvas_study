var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let coord = { x: 0, y: 0 };

document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);

function reposition(e) {
    coord.x = e.clientX - canvas.offsetLeft;
    coord.y = e.clientY - canvas.offsetTop;
}
function start(e) {
    document.addEventListener('mousemove', draw);
    reposition(e);
}
function stop() {
    document.removeEventListener('mousemove', draw);
}
function draw(e) {
    ctx.beginPath();
    ctx.lineWidth = 9;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#45352c';
    ctx.moveTo(coord.x, coord.y);
    reposition(e);
    ctx.lineTo(coord.x, coord.y)
    ctx.stroke();
}