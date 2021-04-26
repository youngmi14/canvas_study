var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let click = 0;
let radius = 10;

bigger();

function bigger() {
  click++;
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.arc(200, 200, radius+click, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = 'orange';
  ctx.fill();
}


// 원
ctx.arc(200, 200, radius+click, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fillStyle = 'orange';
ctx.fill();