const canvas = document.querySelector(".canvas");
const context = canvas.getContext('2d');
let count = 0;

function draw() {
  count++;

  if(count%3 === 0){
    // 기존도형지우기
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    // 새로 도형그리기
    context.fillRect(0, 0, count, count);
    context.fillStyle="rgb(68 98 154)";
    context.fill();
  }

  // 그릴 함수를 콜백으로 계속 호출한다.
  requestAnimationFrame(draw);
}
draw();