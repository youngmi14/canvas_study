var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.moveTo(20, 20);
ctx.lineTo(150, 20);
// arcTo(곡선바깥쪽x, 곡선바깥쪽y, 두번째x, 두번째y, 반지름)
ctx.arcTo(170, 20, 170, 40, 20);
ctx.lineTo(170, 80);
ctx.arcTo(170, 100, 190, 100, 20);
ctx.lineTo(280, 100);
ctx.arcTo(340, 100, 340, 120, 40);

ctx.stroke();