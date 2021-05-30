const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cch = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth; // 16은 body margin
ctx.canvas.height = window.innerHeight;
// 애니메이션
let count = 0;

// 배경
function drawBg() {
    var bgImg = new Image();
    bgImg.src = './bg7.png';

    bgImg.onload = function() {
        // 배경
        ctx.save()
        let ptrn = ctx.createPattern(bgImg, 'repeat-x');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
    }
}
function drawCloud() {
    var cloudBg = new Image();
    cloudBg.src = './eff-night4.png';

    cloudBg.onload = function() {    
        // 별
        ctx.save();
        let cloudptrn = ctx.createPattern(cloudBg, 'repeat-x');
        ctx.fillStyle = cloudptrn;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
    }
}
// 캐릭터
var x = 20;
var y = 300;
function drawCh() {
    var ch = new Image();
    ch.src = './ch-nor.png';

    count++;
    if (count%2 === 0) {
        x+= 1;
    }

    ch.onload = function() {    
        // 캐릭터
        cch.save();
        cch.drawImage(ch, x, y);
        cch.restore();
    }

    // 그릴 함수를 콜백으로 계속 호출한다.
    // requestAnimationFrame(drawCh);
}
function init() {
    drawBg();
    drawCloud();
    drawCh();

    // 그릴 함수를 콜백으로 계속 호출한다.
    requestAnimationFrame(init);
    // drawFont(); // 이미지가 로드되기전에 글을 그리면 이미지밑으로 깔려서 보이지 않는다.
}
init();
