var canvas = $('canvas#heart'),
ctx = canvas.get(0).getContext('2d'),
t = 'transparent', r = '#f66', w = 'fff', b = '#000',
    
imgData = [
  t, t, t, t, t, t, t, t, t, t, t, t, t, 
  t, t, b, b, b, t, t, t, b, b, b, t, t, 
  t, b, r, r, r, b, t, b, r, r, r, b, t,
  b, r, w, w, r, r, b, r, r, r, r, r, b,
  b, r, w, r, r, r, r, r, r, r, r, r, b,
  b, r, r, r, r, r, r, r, r, r, r, r, b,
  t, b, r, r, r, r, r, r, r, r, r, b, t,
  t, t, b, r, r, r, r, r, r, r, b, t, t,
  t, t, t, b, r, r, r, r, r, b, t, t, t,
  t, t, t, t, b, r, r, r, b, t, t, t, t,
  t, t, t, t, t, b, r, b, t, t, t, t, t,
  t, t, t, t, t, t, b, t, t, t, t, t, t,
  t, t, t, t, t, t, t, t, t, t, t, t, t,
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


var canvas8 = $('canvas#little_heart'),
ctx = canvas8.get(0).getContext('2d'),
t = 'transparent', r = '#f66', w = 'fff', b = '#000',
    
imgData = [
  t, t, t, t, t, t, t, t, t, t, t, t, t, 
  t, t, b, b, b, t, t, t, b, b, b, t, t, 
  t, b, r, r, r, b, t, b, r, r, r, b, t,
  b, r, w, w, r, r, b, r, r, r, r, r, b,
  b, r, w, r, r, r, r, r, r, r, r, r, b,
  b, r, r, r, r, r, r, r, r, r, r, r, b,
  t, b, r, r, r, r, r, r, r, r, r, b, t,
  t, t, b, r, r, r, r, r, r, r, b, t, t,
  t, t, t, b, r, r, r, r, r, b, t, t, t,
  t, t, t, t, b, r, r, r, b, t, t, t, t,
  t, t, t, t, t, b, r, b, t, t, t, t, t,
  t, t, t, t, t, t, b, t, t, t, t, t, t,
  t, t, t, t, t, t, t, t, t, t, t, t, t,
],
  
x = 0 , y = 0, w = 13,
s = Number(canvas8.attr('data-scale'));
  
canvas8.attr('width', s * w);
canvas8.attr('height', s * w); 
  
for (var i = 0; i < imgData.length; i++) {  
  if(x == w * s) { x = 0; y += s; }
  ctx.fillStyle = imgData[i];
  ctx.fillRect(x, y, s, s);
  x += s;
}  