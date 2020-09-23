let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let container = document.querySelector('.container');

btn1.addEventListener('click',function() {
  container.style.cssText = 'transform:translateX(0px)'
})
btn2.addEventListener('click',function() {
  container.style.cssText = 'transform:translateX(-1000px)'
})
btn3.addEventListener('click',function() {
  container.style.cssText = 'transform:translateX(-2000px)'
})


