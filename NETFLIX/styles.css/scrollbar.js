document.getElementById('scroll-right1').addEventListener('click', function() {
  var container = document.querySelector('.contents1'); // 변경된 부분
  container.scrollLeft += 50; // 오른쪽으로 50px 이동
});
document.getElementById('scroll-left1').addEventListener('click', function() {
  var container = document.querySelector('.contents1'); // 변경된 부분
  container.scrollLeft -= 50; // 왼쪽으로 50px 이동
});
  
document.getElementById('scroll-right2').addEventListener('click', function() {
  var container = document.querySelector('.contents2'); // 변경된 부분
  container.scrollLeft += 50; // 오른쪽으로 50px 이동
});
document.getElementById('scroll-left2').addEventListener('click', function() {
  var container = document.querySelector('.contents2'); // 변경된 부분
  container.scrollLeft -= 50; // 왼쪽으로 50px 이동
});

document.getElementById('scroll-right3').addEventListener('click', function() {
  var container = document.querySelector('.contents3'); // 변경된 부분
  container.scrollLeft += 50; // 오른쪽으로 50px 이동
});
document.getElementById('scroll-left3').addEventListener('click', function() {
  var container = document.querySelector('.contents3'); // 변경된 부분
  container.scrollLeft -= 50; // 왼쪽으로 50px 이동
});