const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas 크기
ctx.canvas.width = window.innerWidth; // 16은 body margin
ctx.canvas.height = window.innerHeight;


function drawBg() {
    var bgImg = new Image();
    bgImg.src = './bg5.png';

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
    cloudBg.src = './pt-cloud.png';

    cloudBg.onload = function() {    
        // 구름
        ctx.save();
        let cloudptrn = ctx.createPattern(cloudBg, 'repeat');
        ctx.fillStyle = cloudptrn;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
    }
}
function init() {
    drawBg();
    drawCloud();


    // drawFont(); // 이미지가 로드되기전에 글을 그리면 이미지밑으로 깔려서 보이지 않는다.
}
init();
