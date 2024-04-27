const member1 = ["HTML", "CSS"]; // 각 요소를 선언
const member2 = ["CSS", "자바스크립트", "리액트"]; 
const member3 = ["자바스크립트", "타입스크립트"];

// 전개구문을 이용해 하나의 배열로 만든다
const subjects = [...member1, ...member2, ...member3];

const result = document.querySelector("#result")

let sub = new Set() // new Set() 선언, 중복을 피하기 위해서

subjects.forEach(sb => {sub.add(sb);}); // subjects의 값을 각 sb로 설정하고 Set으로 선언된 배열에 추가

// ul로 리스트를 만들고 셋 배열을 맵 해서 각 요소를 목록 하위로 만들고 해당배열을 "" 구분자로 연결한다
result.innerHTML = `<ul>${[...sub].map( subject => `<li>${subject}</li>`).join("")}</ul>`;