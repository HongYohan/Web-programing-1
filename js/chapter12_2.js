const url = "https://jsonplaceholder.typicode.com/users";

let xhr = new XMLHttpRequest();
xhr.open("GET",url,true); // get방식에 url 주소를 가지고 비동기식으로 연다.
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let students = JSON.parse(xhr.responseText);
        renderHTML(students);
    }
};

function renderHTML(contents) {
    let output = "";
    for (let content of contents) {
        output += `
        <h2>${content.name}</h2>
        <ul>
            <li>UID : ${content.username}</li>
            <li>email : ${content.email}</li>
        </ul>
        <hr>
        `;
    }
    document.getElementById("userData").innerHTML = output;
}
