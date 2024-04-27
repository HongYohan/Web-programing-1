const result = document.querySelector("#result")
const bttn = document.querySelector("button")


bttn.addEventListener("click",(e)=>{
    e.preventDefault()
    let nums = new Set(); // 새로운 Set()으로 중복 제외시키기
    while(nums.size<6){ // nums.size가 6이 될떄까지 수행
        let num = Math.floor(Math.random()*45)+1
        nums.add(num);
    }
    result.innerText = `${[...nums]}` // 배열 출력
})