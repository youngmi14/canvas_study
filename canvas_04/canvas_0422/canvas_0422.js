const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
let count = 0;

function draw() {
  count++;

  if(count%20 === 0){
    // 기존 도형지우기
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    
    // 새로 도형그리기
    let red = randomHue();
    let green = randomHue();
    let blue = randomHue();
    ctx.fillStyle = `rgb(${red},${green},${blue})`;
    ctx.fillRect(50, 50, 200, 200);
    ctx.fill();
  }

  function randomHue() {
    let num = Math.floor(Math.random() * 256) + 1;
    return num;
  };

  // 그릴 함수를 콜백으로 계속 호출한다.
  requestAnimationFrame(draw);
}
draw();