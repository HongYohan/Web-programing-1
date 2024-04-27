const url = "https://reqres.in/api/products/10"
const result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        // 서버 응답에 대한것을 문자열로 반환, 즉, JSON을 문자열 객체로 변환
        let product = JSON.parse(xhr.responseText);
        // data안에 []로 각 키와 값이 설정되어 있음
        
        result.innerHTML = `
            <p>상품명 : ${product.data.name}</p> 
            <p>생산년도 : ${product.data.year}</p>
        `;
    }
}