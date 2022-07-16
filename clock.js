const clockText = document.querySelector("#clock");

function time() {
    const date = new Date();
    const days = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clockText.innerText = `${days}일 ${hours}시 ${minutes}분 ${seconds}초`;
}

time(); // 브라우저 시작하자마자 실행
setInterval(time, 1000);