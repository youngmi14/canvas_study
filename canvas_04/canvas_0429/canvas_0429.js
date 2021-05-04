var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.moveTo(20, 20);
ctx.lineTo(150, 20);
ctx.arcTo(170, 20, 170, 40, 20);
ctx.lineTo(170, 80);
ctx.stroke();