function* train(){ // 각요소를 제너레이터로 선언
    yield "판교";
    yield "이매";
    yield "삼동";
    yield "경기광주";
    yield "초월";
    yield "곤지암";
    yield "신둔도예촌";
    yield "이천";
    yield "부발";
    yield "세종대왕릉";
    yield "여주";
}

let g = train(); // 제너레이터 변수 선언

const button = document.querySelector("button")
const result = document.querySelector("#result")

button.addEventListener("click",()=>{
    let station = g.next() // 다음 값을 출력

    if(station.done == false){ // .done == false라면 
        result.innerText=`${station.value}` // g.next().value 값을 가져온다
    }
    else{ // done == true일때 종점을 출력
        result.innerText=`종점!`
    }
})