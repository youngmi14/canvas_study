const canvas = document.querySelector(".canvas");
const context = canvas.getContext('2d');
let count = 0;
let recX = 0
const rectW = 40;
const rectH = rectW;

function draw() {
    recX++;
  if (count < (document.querySelector('canvas').width - rectW)) {
    count++;
  } else if (count >= document.querySelector('canvas').width - rectW) {
    blackWorld();
  }

  if(recX%1 === 0){
    // 기존도형지우기
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();

    // 새로 도형그리기
    context.fillStyle="pink";
    context.fillRect(count, 30, rectW, rectH);
    context.fill();
  }

  // 그릴 함수를 콜백으로 계속 호출한다.
  requestAnimationFrame(draw);
}
draw();

function blackWorld() {
  document.querySelector('body').style.backgroundColor = "black";
}