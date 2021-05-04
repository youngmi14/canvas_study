var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(40, 360);
// bezierCurve(커브점x, y, 커브2x, y 종료x, y)
ctx.bezierCurveTo(100, 100, 300, 300, 360, 40);

ctx.stroke();