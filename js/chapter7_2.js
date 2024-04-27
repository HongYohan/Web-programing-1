const order = document.querySelector("#order");
const orderInform = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2").innerText; // id=container인 요소 하위에 h2를 찾아내기

// order.onclick = () => {
//     orderInform.innerText += `${title}\n`;
// }

order.addEventListener("click",()=>{
    let newP = document.createElement("p");
    let textN = document.createTextNode(title);
    newP.appendChild(textN);
    newP.style.fontSize="0.8em" // 글자 사이즈를 0.8em으로 설정
    newP.style.color="blue"; // 글자색 blue 설정
    orderInform.appendChild(newP);
},{once:true}); // once:true  이벤트 리스너를 한번만 일어나게 하는 동작