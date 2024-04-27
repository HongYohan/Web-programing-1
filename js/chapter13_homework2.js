fetch("http://dummyjson.com/quotes")
.then(response => response.json())
.then(data=>{
    const result = document.querySelector("#result"); // result 영역을 가져옴
    const random = Math.floor(Math.random()*30); // random으로 0~30 사이의 숫자를 가져옴
    // .quote라는 클래스 영역에 quotes[random] 인덱스로 접근해서 quote를 가져옴
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    // .author라는 클래스 영역에 quotes[random] 인덱스로 접근해서 author를 가져옴
    result.querySelector(".author").innerHTML = ` - ${data.quotes[random].author}`;
})
.catch(err => console.log(err))