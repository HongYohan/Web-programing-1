const pizza = new Promise((resolve, reject)=>{
    resolve('피자를 주문합니다.')
})

const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('피자 도우 준비');
        },3000)
    })
}

const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('토핑 완료');
        },1000)
    })
}

const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('굽기 완료');
        },2000)
    })
}

pizza
.then(result => step1(result)) // pizza가 step1을 수행함
.then(step2) // step1이 true라면 수행, result => step2(result)를 줄여서 표현함
.then(step3) // step2이 true라면 수행, result => step3(result)를 줄여서 표현함
.then(console.log) // step3이 true라면 수행, result => console.log(result)를 줄여서 표현함
.then(()=>{
    console.log('피자가 준비되었습니다.'); // 마지막에 수행
})