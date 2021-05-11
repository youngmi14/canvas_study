const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorBg = '#957dad'; // purple
const colorsArr = [
  '#99e5c3', // green
  '#fec8d8', // pink 
  '#99e1e5', // blue
  '#f6f6c6' // yellow 
];

// ctx.canvas.width = window.innerWidth;
// ctx.canvas.height = window.innerHeight;
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawIceCream() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.beginPath();
    ctx.arc(200, 160, 100, 0, 360);
    ctx.fillStyle = colorsArr[getRandom(0, 3)];
    ctx.fill();
    ctx.restore();
}
function drawCon() {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(140, 240);
    ctx.lineTo(260, 240);
    ctx.lineTo(200, 335);
    ctx.closePath();
    ctx.fillStyle = 'rgb(255, 255, 255)';//"#eed9b9";
    ctx.fill();
    ctx.restore();
}
function init() {
    drawIceCream();
    drawCon();
}
init();