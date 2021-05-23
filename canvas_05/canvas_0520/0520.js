const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth - 24; // 16은 body margin
ctx.canvas.height = window.innerHeight;

// 패턴
function drawFont() {
    ctx.font = '20px malgun gothic'; // 폰트크기, 글꼴체
    // ctx.fillStyle = 'rgb(255, 181, 245)'; // 색상지정
    ctx.fillText('heart pattern', 50, 30); // 그릴 글자, 위치 x, y
}

function drawHeart() {
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
}

function init() {
    var img = new Image();
    img.src = './blackheart.png';
    img.onload = function() {
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
init();
