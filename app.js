const 시작시간 = new Date();

function satTime() {
  const 현재시간 = new Date();
  const 흐른시간 = new Date(현재시간 - 시작시간);
  const 분 = 흐른시간.getMinutes().toString();
  const 초 = 흐른시간.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

setInterval(satTime, 1000);
