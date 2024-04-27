const buttons = document.querySelectorAll("p > span"); // p노드에 있는 span을 전부 가지고 온다

for(let button of buttons){ // 각 button에 대한 요소들의 실행
    button.addEventListener("click", function() {
        this.parentNode.remove(this);
    })
}