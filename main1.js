// 타이머용
// 변수 선언
const startButton = document.querySelector(".startButton");
const time = document.querySelector(".time");
const setButton = document.querySelector(".setButton");
let interver;

// 함수 선언
function startTimer() {
  interver = setInterval(() => {
    time.innerText = parseInt(time.innerText) + 1;
  }, 1000);
}

function setTime() {
  time.innerText = 0;
  clearInterval(interver);
}

// 이벤트리스너
startButton.addEventListener("click", startTimer);
setButton.addEventListener("click", setTime);
