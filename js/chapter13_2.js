const order = new Promise((resolve, reject)=>{
    let coffee = prompt("어떤 커피를 주문하시겠습니까?","아메리카노"); // 메시지 내용, 기본값
    if(coffee != null && coffee != ""){ // 값이 있다면
        document.querySelector(".start").innerText = `${coffee} 주문 접수`;
        setTimeout(()=>{
            resolve(coffee); // 3초후에 resolve 수행
        },3000)
    }else{
        reject('커피를 주문하지 않았습니다'); // 에러시 수행
    }
})

function display(result){
    document.querySelector(".end").innerText = `${result} 준비 완료` // 결과값 넣기
    document.querySelector(".end").classList.add("active")
    document.querySelector(".start").classList.add("done");
}

function showErr(err) {
    console.log(err); // 오류 발생시
}

// order
// .then(display) // order 수행시 true 라면 display 수행
// .catch(showErr) // false라면 catch 수행

// 프로미스 체이닝 시
order.then(display).catch(showErr);