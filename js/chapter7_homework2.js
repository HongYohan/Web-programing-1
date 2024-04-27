const bttn = document.querySelector("#bttn")
const noti = document.querySelector("#noti-box")

bttn.addEventListener("click",(e)=>{
    e.preventDefault();
    const mess = document.createElement("div")
    mess.classList.add("noti"); // message박스에 해당 클래스를 추가
    mess.innerText=`알림 내용이 표시됩니다.`
    noti.appendChild(mess);

    setTimeout(() => {
        noti.remove();
    }, 3000); // 밀리세컨드 기준으로 3000ms 지난훈 noti 를 삭제
})