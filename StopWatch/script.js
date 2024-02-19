const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

let seconds = 0;
let tens = 0;
let interval;

// buttonStart를 클릭했을 때, 어떤 함수를 작동시킬거라고 등록하는 것
buttonStart.onclick = function () {
  // setInterval이 return 하는 것을 interval로
  interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  // clearInterval은 interval을 clear(멈추는) 역할이다
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  seconds = 0;
  tens = 0;
  appendSeconds.innerText = seconds;
  appendTens.innerText = 0;
};

function startTimer() {
  tens++;

  if (tens > 99) {
    tens = 0;
    seconds++;
    appendSeconds.innerText = seconds;
  } else {
    appendTens.innerText = tens;
  }
}
