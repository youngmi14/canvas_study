var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// 시계
ctx.beginPath();
ctx.arc(200, 200, 170, 0, Math.PI * 2, true);
ctx.stroke(); 
// ctx.moveTo(205, 200);
ctx.beginPath();
ctx.arc(200, 200, 5, 0, Math.PI * 2, true);
ctx.fill(); 

// 시계시침
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 140); // x, y
ctx.lineWidth = 4;
ctx.stroke();
// 시계분침
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(340, 200); // x, y
ctx.lineWidth = 1.5;
ctx.stroke();



//시계숫자
ctx.font = '18px sanserif';
// ctx.fillText('1', 190, 60);
// ctx.fillText('2', 190, 80);
ctx.fillText('3', 350, 205);
// ctx.fillText('4', 190, 75);
// ctx.fillText('5', 190, 80);
ctx.fillText('6', 195, 355);
// ctx.fillText('7', 190, 55);
// ctx.fillText('8', 190, 55);
ctx.fillText('9', 45, 205);
// ctx.fillText('10', 190, 55);
// ctx.fillText('11', 190, 55);
ctx.fillText('12', 190, 55);