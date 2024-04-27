const displaydate = document.querySelector("#today");
const displaytime = document.querySelector("#clock")
const today = new Date();

const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const day1 = today.getDay();
let day2="";

switch(day1){
    case 0: day2="일요일"; break;
    case 1: day2="월요일"; break;
    case 2: day2="화요일"; break;
    case 3: day2="수요일"; break;
    case 4: day2="목요일"; break;
    case 5: day2="금요일"; break;
    case 6: day2="토요일"; break;
}

displaydate.innerText=`${year}년 ${month}월 ${date}일 ${day2}`

function clock(){
    let now = new Date();
    let hrs = now.getHours();
    let period = 'AM';
    if(hrs === 0){ // 00시를 의미함
        hrs = 12;
    }else if(hrs>12){
        hrs = hrs-12;
        period = 'PM';
    }
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hrs = hrs<10?'0'+hrs:hrs;
    min = min<10?'0'+min:min;
    sec = sec<10?'0'+sec:sec;
    displaytime.innerText=`${period} ${hrs} : ${min} : ${sec}`;
}

// 1000ms 즉 1초마다 clock함수 수행
setInterval(clock,1000)