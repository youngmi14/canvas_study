var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var imgH = new Image(); // 시침이미지
var imgM = new Image(); // 분침이미지
imgH.src = 'hour.png';
imgM.src = 'min.png';

function makeClock() { // 시계기본요소
    // 시계
    ctx.beginPath();
    ctx.arc(200, 200, 170, 0, Math.PI * 2, true);
    ctx.fillStyle = "orange";
    ctx.fill(); 
    ctx.lineWidth = 3;
    ctx.stroke(); 
    // 가운데점
    ctx.beginPath();
    ctx.arc(200, 200, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = "black";
    ctx.fill(); 

    //시계숫자
    ctx.font = '18px sanserif';
    ctx.fillText('1', 270, 80);
    ctx.fillText('2', 320, 140);
    ctx.fillText('3', 350, 205);
    ctx.fillText('4', 320, 270);
    ctx.fillText('5', 270, 330);
    ctx.fillText('6', 195, 355);
    ctx.fillText('7', 115, 330);
    ctx.fillText('8', 63, 270);
    ctx.fillText('9', 45, 205);
    ctx.fillText('10', 63, 140);
    ctx.fillText('11', 115, 80);
    ctx.fillText('12', 190, 55);
}

function makeClockwork() {
    const imgPos = 99; // 시계바늘이미지시작위치
    let radHour;
    let radMin;
    radHour = this.nowHour%12 * 30; // 시침각도
    radMin = this.nowMin * 6; // 분침각도
    
    // rotate translate 같이써야 중점중심으로 rotate됨
    // 시계시침
    imgH.addEventListener('load', function() {
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(radHour*Math.PI/180);
        ctx.translate(-(canvas.width/2), -(canvas.height/2));
        ctx.drawImage(imgH, imgPos, imgPos);
        ctx.restore()
    })
    // 시계분침
    imgM.addEventListener('load', function() {
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(radMin*Math.PI/180);
        ctx.translate(-(canvas.width/2), -(canvas.height/2));
        ctx.drawImage(imgM, imgPos, imgPos);
        ctx.restore()
    })
}

function getTime() {
    let now = new Date();
    this.nowHour = now.getHours();
    this.nowMin = now.getMinutes();
}



function init() {
    getTime() 
    makeClock();
    makeClockwork();
}
init();