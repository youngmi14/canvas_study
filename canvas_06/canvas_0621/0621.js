const canvas2 = document.getElementById('canvas2'); // canvas2 는 사람
const ctx2 = canvas2.getContext('2d');
const canvas = document.getElementById('canvas'); // canvas는 드레스
const ctx = canvas.getContext('2d');
// 옷 이미지
const img_c = new Image();
img_c.src = 'dress1.png';
// 사람 이미지
const girl = new Image();
girl.src = 'dressup_girl.png';

let click_num = -1;

// 이미지 최초 그리기
function drawImg() {
    img_c.addEventListener('load', function() {
        ctx.save();
        ctx.drawImage(img_c, 0, 0);
        ctx.restore();
    })
    girl.addEventListener('load', function() {
        ctx2.save();
        // girl.src = 'dressup_girl.png';
        ctx2.drawImage(girl, 0, 0);
        ctx2.restore();
    })
}
function init() { // 최초실행
    drawImg();
}
init();


// 바뀌는 드레스 이미지
function changeDress() {
    if (click_num%4 == 0) {
        img_c.src = 'dress1.png';
    } else if (click_num%4 == 1) {
        img_c.src = 'dress2.png';
    } else if (click_num%4 == 2) {
        img_c.src = 'dress3.png';
    } else if (click_num%4 == 3) {
        img_c.src = 'dress4.png';
    }
}

// change 버튼 클릭
const btn = document.getElementById('btn');
btn.onclick = function() {
    console.log("버튼클릭")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    click_num++;
    changeDress();
}