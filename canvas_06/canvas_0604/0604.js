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
    // 밤하늘
        bgImg.src = './bg7.png';
        document.querySelector('body').style.backgroundColor = "#20789a";

    bgImg.onload = function() {
        // 배경
        ctx.save()
        let ptrn = ctx.createPattern(bgImg, 'repeat-x');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
    }
}
drawBg();

// 캐릭터
const img = document.getElementById('img');
const player = {
    w: 100,
    h: 100,
    x: 20,
    y: 200,
    speed: 5,
    dx: 0,
    dy: 0
}

const clear = () => { // 클리어
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const drawPlayer = (ch) => {
    window.onload = function() {
        var img = document.getElementById("img"); 
        ctx.drawImage(img, player.x, player.y, player.w, player.h);
    }
}

function drawCh() {
    // var ch = new Image();
    // ch.src = './ch-nor.png';

    ch.onload = function() {    
        // 캐릭터
        // ctx.save();
        drawPlayer(ch);
        // ctx.restore();
    }
}

const detectWalls = () => {
    // Left wall
    if (player.x < 0) {
        player.x = 0;
    }
    // Right Wall
    if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w;
    }
}

const newPos = () => {
    player.x += player.dx;
    detectWalls();
}

const update = () => {
    clear();
    drawPlayer();
    newPos();
    requestAnimationFrame(update);
}
update();

// function init() {
//     count++;
//     if (count%5 === 0) {
        // if (y >= 550) {
        //     yDown = false;
        // } else if (y <= 10) {
        //     yDown = true;
        // }

        // if (yDown) {
        //     y+= 3;
        // } else {
        //     y-= 3;
        // }

        // drawCh();
    // }

    // 그릴 함수를 콜백으로 계속 호출한다.
    // requestAnimationFrame(init);
    // drawFont(); // 이미지가 로드되기전에 글을 그리면 이미지밑으로 깔려서 보이지 않는다.
// }
// init();
