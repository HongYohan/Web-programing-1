function area(r){ 
    return Math.PI*r*r; // Math.PI 원주율
}

function circum(r){
    return 2*Math.PI*r
}

const result = document.querySelector("#result")
const radius = prompt("반지름의 크기는? ")

// .toFixed(자릿수) 소수점 자릿수를 정하는 함수
result.innerText=`
반지름: ${radius}
원 넓이: ${area(radius).toFixed(3)}
원 둘레: ${circum(radius).toFixed(3)}`