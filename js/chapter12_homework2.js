const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");
const result = document.querySelector("#result");


button.addEventListener("click",()=>{
    let num = userNumber.value;
    try{
        // num ==="" 또는 isNaN 이라면
        if (num === "" || isNaN(num)) {
            throw "숫자를 입력하세요.";
        }
        num = Number(num);
        if (num <= 10) {
            result.innerText = num;
        }
        if (num > 10) { // 오류 발생하면 catch문으로 값을 보낸다
            throw "10보다 작은 수를 입력하세요.";
        }
    }catch(error){
        alert(error);
    }finally{
        userNumber.innerText="";
    }
})





