const canvas = document.querySelector(".canvas");
const context = canvas.getContext('2d');
let xPos = 10;
let count = 0;

function draw() {
  count++;

  if(count%30 === 0){
    // 기존 원 지우기 : 빼먹으면 잔상 다 그려짐
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    // 새로 원 그리기
    context.arc(xPos, 150, 20, 0, Math.PI*2, false);
    context.fillStyle="red";
    context.fill();
    xPos += 10;
  }

  // 그릴 함수를 콜백으로 계속 호출한다.
  requestAnimationFrame(draw);
}

draw();