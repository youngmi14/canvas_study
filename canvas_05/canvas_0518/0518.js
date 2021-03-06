const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth - 16; // 16은 body margin
ctx.canvas.height = window.innerHeight - 16;

// 반복
function drawFont() {
    ctx.font = '20px malgun gothic'; // 폰트크기, 글꼴체
    ctx.fillStyle = 'rgb(255, 181, 245)'; // 색상지정
    ctx.fillText('캔버스 스터디 : translate, rotate', 150, 30); // 그릴 글자, 위치 x, y
    ctx.fillText('translate을 이용한 offset 이동', 150, 60); // 그릴 글자, 위치 x, y
}
function drawDNoTransolate() {
    for (var i = 0; i <10; i++) { // i는 360%i= 회전각도
        // 회전
        ctx.rotate((Math.PI/180) * 36); // 36도 회전
        // 컬러
        ctx.fillStyle = 'rgba(255, 181, 245, 0.5)';
        // 타원
        ctx.beginPath();
        ctx.arc(80, 21, 40, 0, Math.PI*2, false);
        // ctx.bezierCurveTo(30, 0, 0, 100, 0, 200); 
        ctx.fill();
    }
}
function drawDo() {
    ctx.translate(200, 300); // 오프셋 변경 : 원점 변경
    for (var i = 0; i <10; i++) { // i는 360%i= 회전각도
        // 회전
        ctx.rotate((Math.PI/180) * 36); // 36도 회전
        // 컬러
        ctx.fillStyle = 'rgba(20, 181, 245, 0.5)';
        // 타원
        ctx.beginPath();
        ctx.arc(80, 21, 40, 0, Math.PI*2, false);
        // ctx.bezierCurveTo(30, 0, 0, 100, 0, 200); 
        ctx.fill();
    }
}

function init() {
    drawFont();
    drawDNoTransolate();
    drawDo();
}
init();
