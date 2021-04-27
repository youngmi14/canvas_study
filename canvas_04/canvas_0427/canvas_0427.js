var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// 몸통
ctx.beginPath();
ctx.moveTo(20, 180); // 시작위치
// 첫번째커브 x1, y1 두번째커브 x2, y2 끝나는좌표 x, y
ctx.bezierCurveTo(10, 20, 160, 20, 150, 180);
ctx.fillStyle = 'rgb(0, 50, 100)';
ctx.fill();

// 눈
ctx.beginPath();
ctx.arc(65, 100, 10, 0, Math.PI * 2, true);
ctx.arc(105, 100, 10, 0, Math.PI * 2, true);
ctx.fillStyle = 'white';
ctx.fill();
// 검은동공
ctx.beginPath();
ctx.arc(65, 100, 7, 0, Math.PI * 2, true);
ctx.arc(105, 100, 7, 0, Math.PI * 2, true);
ctx.fillStyle = 'black';
ctx.fill();