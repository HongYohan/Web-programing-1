const button = document.querySelector("button")
const result = document.querySelector("#result")

button.addEventListener("click",(e)=>{
    e.preventDefault()
    const userEmail = document.querySelector("#userEmail").value;
    let show1=userEmail.slice(0,3); // 앞에서 0~3번째의 문자열만 출력
    let x = userEmail.indexOf("@");
    let show2= userEmail.substring(x); // @이를 기준으로 뒤에 문자열 전부 출력
    result.innerText =`${show1}...${show2}`;
    userEmail.innerText=""
})