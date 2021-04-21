const canvas = document.querySelector(".canvas");
const context = canvas.getContext('2d');
let count = 0;
let recX = 0; // x좌표
const rectW = 40;
const rectH = rectW;
let rectDir = 'right';

function draw() {
  count++;
  if (recX == 0) { // 다시 코드짜야함 조건문 만들어서 끝까지오면 다시 반대로 가게하는 조건으로새로
    rectDir = 'right';
  } else if (recX == 400 - rectW) {
    rectDir = 'left';
  }

  if (rectDir == 'right') {
    recX++;
  } else if (rectDir == 'left') {
    recX--;
  }

  if(count%2 === 0){
    // 기존 도형지우기
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    
    // 새로 도형그리기
    context.fillStyle = "pink";
    context.fillRect(recX, 30, rectW, rectH);
    context.fill();
  }
  // 그릴 함수를 콜백으로 계속 호출한다.
  requestAnimationFrame(draw);
}
draw();