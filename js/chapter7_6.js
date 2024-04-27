const reset = document.querySelector("#reset");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");
const title = document.querySelector("#title");
const author = document.querySelector("#author");

save.addEventListener("click", function(e){
    e.preventDefault();
    const item = document.createElement("li"); // 저장할 목록을 만듬
    // 해당 item에 HTML을 설정
    item.innerHTML=`${title.value} - ${author.value} <span class="delButton">삭제</span>` 
    bookList.appendChild(item); // 부모노드 연결, 즉 저장할 위치를 정한다
    const delButtons = document.querySelectorAll(".delButton") // 삭제할 버튼
    for(let delButton of delButtons){
        delButton.addEventListener("click",function(){ 
            this.parentNode.remove(this.parentNode); // 해당 노드의 부모노드를 제거한다
        })
    }
})


