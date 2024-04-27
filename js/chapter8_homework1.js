const bttn = document.querySelector("#bttn")

const today = new Date();

const nyear = today.getFullYear();
const nmonth = today.getMonth()+1;
const ndate = today.getDate();

bttn.addEventListener("click",(e)=>{
    e.preventDefault();

    // 등록한 시간
    const year = document.querySelector("#year").value;
    const month = document.querySelector("#month").value;
    const date = document.querySelector("#date").value;

    // new Date(연도, 달, 일수)
    let birth = new Date(year,month,date);
    let dates = today.getTime()-birth.getTime();
    let passeddate = Math.floor(dates/(1000*60*60*24)) // 날을 위한 계산
    let passedhour = Math.floor(dates/(1000*60*60)) // 시간을 위한 계산

    const current = document.querySelector("#current")
    const days = document.querySelector("#days")
    const hours = document.querySelector("#hours")

    current.innerText=`${nyear}년 ${nmonth}월 ${ndate}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`
    days.innerText=`날짜로는 ${passeddate}일이 흐르고,`;
    hours.innerText=`시간으로는 ${passedhour} 시간이 흘렀습니다.`
})