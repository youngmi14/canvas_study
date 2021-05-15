const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth - 16; // 16은 body margin
ctx.canvas.height = window.innerHeight - 16;

// 폰트

function drawFont() {
    ctx.font = '20px malgun gothic'; // 폰트크기, 글꼴체
    ctx.fillStyle = 'rgb(255, 181, 245)'; // 색상지정
    ctx.fillText('캔버스 스터디', 5, 30); // 그릴 글자, 위치 x, y

    ctx.font = '30px verdana';
    ctx.strokeStyle = 'white';
    ctx.strokeText('Canvas font', 5, 80);

    ctx.font = '30px verdana';
    ctx.strokeStyle = 'black';
    ctx.textBaseline = 'middle';
    ctx.strokeText('Canvas font textBaseline: middle', 220, 80);

    ctx.font = '30px verdana';
    ctx.strokeStyle = 'black';
    ctx.textAlign = "center";
    ctx.strokeText('Canvas font textAlign : center', 35, 130);
}
function init() {
    drawFont();
}
init();
