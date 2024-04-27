const result = document.querySelector("#result");
const start = new Date("2023-11-01") // 시작 시간
const today = new Date();


let passedTime = today.getTime()-start.getTime()
// 1000*60*60*24는 ms -> minute -> hour -> day
let passedDay = Math.round(passedTime/(1000*60*60*24)); // Math.round()로 반올림

result.innerText=passedDay;