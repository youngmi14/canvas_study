const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth; // 16은 body margin
ctx.canvas.height = window.innerHeight;
// 애니메이션
let count = 0;
let yDown = true;

// 배경
function drawBg() {
    var bgImg = new Image();
    if (y >= 300) { // 노을하늘
        bgImg.src = './bg5.png'; 
        document.querySelector('body').style.backgroundColor = "#f1c7b2"; 
    } else { // 밤하늘
        bgImg.src = './bg7.png';
        document.querySelector('body').style.backgroundColor = "#20789a";
    }

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
    if (y >= 300) { // 노을하늘
        cloudBg.src = './pt-cloud.png';
    } else { // 밤하늘
        cloudBg.src = './eff-night4.png';
    }

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
var x = window.innerWidth/2;
var y = 20;
function drawCh() {
    var ch = new Image();
    ch.src = './ch-nor.png';

    ch.onload = function() {    
        // 캐릭터
        // ctx.save();
        ctx.drawImage(ch, x, y);
        // ctx.restore();
    }
}
function init() {
    count++;
    if (count%1 === 0) {
        // 기존도형지우기
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (y >= 550) {
            yDown = false;
        } else if (y <= 10) {
            yDown = true;
        }

        if (yDown) {
            y+= 3;
        } else {
            y-= 3;
        }

        drawBg();
        drawCloud();
        drawCh();
    }

    // 그릴 함수를 콜백으로 계속 호출한다.
    requestAnimationFrame(init);
    // drawFont(); // 이미지가 로드되기전에 글을 그리면 이미지밑으로 깔려서 보이지 않는다.
}
init();
