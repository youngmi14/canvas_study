const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth - 16; // 16은 body margin
ctx.canvas.height = window.innerHeight - 16;

// 그림자

function drawFont() {
    ctx.font = '20px malgun gothic'; // 폰트크기, 글꼴체
    ctx.fillStyle = 'rgb(255, 181, 245)'; // 색상지정
    ctx.fillText('캔버스 스터디 : 그림자', 5, 30); // 그릴 글자, 위치 x, y
    ctx.fillText('주의할 점은 그림자를 도형보다 먼저 그려야 한다는 것', 5, 60); // 그릴 글자, 위치 x, y
}
function drawDo() {
    ctx.fillstyle = 'pink';
    ctx.fillRect(30, 90, 200, 200);
}
function drawShadow() {
    ctx.shadowOffsetX = 20; //그림자 그려질 X좌표
    ctx.shadowOffsetY = 10; //그림자 그려질 Y좌표
    ctx.shadowColor = "white"; //그림자 색상
    ctx.shadowBlur = 30; //그림자의 흐린 정도 지정
}
function init() {
    drawFont();
    drawShadow(); // 그림자를 도형보다 먼저!
    drawDo();
}
init();
