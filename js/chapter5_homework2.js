const calc = document.querySelector("#calc");
const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const result = document.querySelector("#result"); // 변수값으로 설정해서 접근하는것이 좋음

calc.onclick = () =>{
    result.innerText=getGCD(num1.value,num2.value); // value는 나중에 하는게 좋음
}

function getGCD(a,b){ // 새로운 함수 선언
    let max = a>b?a:b; // 최대값 찾기
    let num=0;
    for(let i=1;i<=max;i++){
        if(a%i===0 && b%i===0){
            num=i;
        }
    }
    return num;
}