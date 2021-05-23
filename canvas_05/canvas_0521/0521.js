const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth; // 16은 body margin
ctx.canvas.height = window.innerHeight;

// 패턴
function drawFont() {
    ctx.font = '20px malgun gothic'; // 폰트크기, 글꼴체
    ctx.fillStyle = 'black'; // 색상지정
    ctx.fillText('Pattern "repeat-x, repeat-y"', 5, 20); // 그릴 글자, 위치 x, y
}

function init() {

    var img = new Image();
    img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    img.onload = function() {
        ctx.save()
        let ptrn = ctx.createPattern(img, 'repeat-y');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, 100, ctx.canvas.height);
        ctx.restore();
        
        ctx.save();
        ptrn = ctx.createPattern(img, 'repeat-x');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, ctx.canvas.width, 100);


        drawFont(); // 이미지가 로드되기전에 글을 그리면 이미지밑으로 깔려서 보이지 않는다.
    }
}
init();
