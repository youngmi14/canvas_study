var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function makeCircle(rad) {
    let colorArr = ['#ffb033', '#ff4933', '#33a8ff', '#ff339a', '#3345ff', '#ffc933'];
    ctx.beginPath();
    ctx.rotate((Math.PI / 180) * rad);
    ctx.arc(330, 330, 20, 0, Math.PI * 2, true);
    ctx.fillStyle = colorArr[rad%5];
    ctx.fill(); 
}

function init() {
    for (var i = 0; i < 360; i+=6) {
        ctx.save(); 
        makeCircle(i);
        ctx.restore();
    }
}
init();