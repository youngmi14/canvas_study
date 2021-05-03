var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath(); // 새경로 만듦
ctx.arc(200, 200, 100, 0, Math.PI * 2, true);
ctx.stroke(); // 윤곽선쓰다듬어 모양그림