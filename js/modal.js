const open = document.querySelector("#open");
const modalbox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

function mb(){ // 함수 선언
    modalbox.classList.toggle("active");
}

open.addEventListener("click",mb); // open과 close의 기능이 같기때문에 함수를 먼저 선언
close.addEventListener("click",mb);