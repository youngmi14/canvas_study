var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50); // 시작위치 x y 
ctx.arcTo(150, 50, 150, 150, 100); //시작점을 지나는 첫번째 x1, y1 , 원의기준이 되는 x2, y2, 반지름
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 50);
ctx.arcTo(200, 50, 200, 200, 100);
ctx.stroke();