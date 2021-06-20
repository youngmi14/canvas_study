const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// 춘식이 이미지
const img_c = new Image();

img_c.src = 'chun.png';

let click_num = 0;

// 이미지 최초 그리기
function drawImg() {
    img_c.addEventListener('load', function() {
        ctx.save();
        ctx.drawImage(img_c, 70, 100);
        ctx.restore();
    })
}
function init() { // 최초실행
    drawImg();
}
init();


// 바뀌는 춘식이 이미지
function changeChun() {
    if (click_num%3 == 0) {
        img_c.src = 'chun.png';
    } else if (click_num%3 == 1) {
        img_c.src = 'love_chun.png';
    } else if (click_num%3 == 2) {
        img_c.src = 'cry_chun.png';
    }
}

// change 버튼 클릭
const btn = document.getElementById('btn');
btn.onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    click_num++;
    changeChun();
}