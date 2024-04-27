function change(){
    let num = Math.floor(Math.random()*5+1)
    // 해당 문서 몸 부분의 스타일을 변경한다 url 경로를 설정
    document.body.style.backgroundImage = `url(images/bg-${num}.jpg)`
}

// "load"는 불러올때
document.addEventListener("load",change())
