const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorBg = '#957dad'; // purple
const colorsArr = [
  '#99e5c3', // green
  '#fec8d8', // pink 
  '#99e1e5', // blue
  '#f6f6c6' // yellow 
];
const circle = new Path2D();
let currentColor = colorsArr[getRandom(0, 3)];

let newColorsArr = colorsArr.slice();
newColorsArr.filter((ele) => ele !== currentColor);


function getRandom(min, max) { // 랜덤함수
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawIceCream() {
    ctx.save();
    circle.arc(200, 160, 100, 0, 360);
    ctx.fillStyle = colorsArr[getRandom(0, 3)];
    ctx.fill(circle);
    ctx.restore();
}
function drawCon() {
    ctx.save();
    circle.arc(200, 160, 100, 0, 360);
    ctx.fillStyle = colorsArr[getRandom(0, 3)];
    ctx.fill(circle);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(140, 240);
    ctx.lineTo(260, 240);
    ctx.lineTo(200, 335);
    ctx.closePath();
    ctx.fillStyle = 'rgb(255, 255, 255)';//"#eed9b9";
    ctx.fill();

    ctx.font = '15px Cambria san-serif';
    ctx.fillStyle = 'white';
    ctx.fillText('아이스크림을 클릭해보세요!', 100, 380);
}
drawIceCream()
drawCon();

// 마우스 좌표
canvas.addEventListener('mousedown', function(e) {
    if (ctx.isPointInPath(circle, e.offsetX, e.offsetY)) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 초기화
        newColorsArr = colorsArr.slice();
        newColorsArr.filter((ele) => ele !== currentColor);
        currentColor = newColorsArr[getRandom(0, 2)];
        ctx.fillStyle = currentColor;
        ctx.fill(circle);
        drawCon();
    }
})