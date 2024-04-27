const today = new Date(); // 현재 날짜와 시간 정보를 담은 today 객체
const hrs = today.getHours(); // 현재 시간 중 hour 정보를 가져옴
const container=document.querySelector("#container");


let imgs=document.createElement("img"); // img라고 요소를 설정함
imgs.src = (hrs<12)?"images/morning.jpg":"images/afternoon.jpg"; // 해당 요소의 속성을 3항연산자 조건으로 설정가능
container.appendChild(imgs); // 부모노드에 연결