const raffle = document.querySelector("#raffle")
const result = document.querySelector("#result")

raffle.addEventListener("click",(e)=>{
    e.preventDefault();
    const seed = document.querySelector("#seed").value;
    const total = document.querySelector("#total").value;

    let nums =""; // 새 변수 랜덤으로 뽑은 값을 저장
    
    for(let i=0;i<total;i++){
        let num = Math.floor(Math.random()*seed+1);
        nums+=`${num}번, `;
    }
    result.innerText = `당첨자: ${nums}`
    result.classList.add("show");
})