// 기록용

const recordButton = document.querySelector(".recordButton");
const timerecording = document.querySelector(".timerecording");
const newTime = document.querySelector(".time");

function recordAction() {
  let timeDiv = document.createElement("div");

  // 이부분 올라간 타임 기록
  timeDiv.innerText = newTime.innerText;

  //
  timerecording.appendChild(timeDiv);
}
recordButton.addEventListener("click", recordAction);
