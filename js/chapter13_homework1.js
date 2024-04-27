fetch("http://dummyjson.com/quotes") // fetch(위치, 옵션) 옵션 생략시 GET방식
.then(response => response.json()) // JSON을 객체로 가져옴
.then(data=>{ // data의 값을 가져오고
    console.log(data); // 그 값을 표기함
})
.catch(err => console.log(err))