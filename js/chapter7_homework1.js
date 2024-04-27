const username = document.querySelector("#username");
const major = document.querySelector("#major");
const button = document.querySelector("button");


button.addEventListener("click",(e)=>{
    e.preventDefault();

    const tbody = document.querySelector("#attendant > tbody");
    const items = document.createElement("tr");
    items.innerHTML=`<td>${username.value}</td> <td>${major.value}</td> <span class="delButton">삭제</span>`

    tbody.appendChild(items);
    username.value=""; // 내용을 등록한 다음 적어둔 내용 초기화
    major.value="";

    const delButtons = document.querySelectorAll(".delButton")
    for(let delButton of delButtons){
        delButton.addEventListener("click",function(){
            this.parentNode.remove(this.parentNode);
        })
    }

    // 따로 선언
    // const tr = document.createElement("tr");
    // const td1 = document.createElement("td");
    // const td2 = document.createElement("td");
    // td1.innerText=`${username.value}`;
    // td2.innerText=`${major.value}`;
    // tr.appendChild(td1);
    // tr.appendChild(td2);
    // tbody.appendChild(tr);
})