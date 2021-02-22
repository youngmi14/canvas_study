var canvas = $('canvas#heart'),
ctx = canvas.get(0).getContext('2d'),
t = 'transparent', r = '#fff', w = '#d3d3d3', b = '#000', m = '#ff7f41',
    
imgData = [
  t, t, t, t, b, b, b, t, t, t, t, t, t, 
  t, t, t, b, r, r, r, b, t, t, t, t, t, 
  t, t, b, r, b, r, b, r, b, t, t, t, t,
  t, t, t, b, r, r, r, b, t, t, t, t, t,
  t, t, t, t, b, r, b, t, t, t, t, b, t,
  t, t, b, b, r, r, r, b, b, t, t, b, t,
  t, t, b, r, r, m, r, r, r, b, t, b, t,
  t, b, r, r, r, r, r, r, w, b, b, b, t,
  t, b, r, r, r, m, r, r, w, b, b, t, t,
  t, b, r, r, r, r, r, w, w, b, t, t, t,
  t, b, b, r, r, r, w, w, b, b, t, t, t,
  t, t, b, w, w, w, w, w, b, t, t, t, t,
  t, t, t, b, b, b, b, b, t, t, t, t, t,
],
  
x = 0 , y = 0, w = 13,
s = Number(canvas.attr('data-scale'));
  
canvas.attr('width', s * w);
canvas.attr('height', s * w); 
  
for (var i = 0; i < imgData.length; i++) {  
  if(x == w * s) { x = 0; y += s; }
  ctx.fillStyle = imgData[i];
  ctx.fillRect(x, y, s, s);
  x += s;
}  
