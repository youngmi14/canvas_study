const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let stars = 500;
let colorRange = [0, 60, 240];

ctx.canvas.width = window.innerWidth +300;
ctx.canvas.height = window.innerHeight +300;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.5;
    var hue = colorRange[getRandom(0, colorRange.length -1)];
    var sat = getRandom(50, 100);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 360);
    ctx.fillStyle = 'hsl(' +hue + ', '+sat+'%, 88%)';
    ctx.fill();
}