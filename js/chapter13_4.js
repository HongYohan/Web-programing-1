fetch('json/chapter13_4.json') // json을 패치로 가져옴, new Promise 대신에 쓰임
.then(response => response.json()) // json의 파일을 객체로 변환
.then(json => { //json에서 가져온 값을 json이라는 객체명으로 바꿈
    let output ='';
    json.forEach(student => { // 각 요소를 student라는 변수로 선언해서 가져옴
        output += `
            <h2>${student.name}</h2>
            <ul>
                <li>전공: ${student.major}</li>
                <li>학년: ${student.grade}</li>
            </ul>
            <hr>
        `
    })
    document.querySelector("#result").innerHTML = output; 
})
.catch(error => console.log(error));