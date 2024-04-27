const img=document.querySelector("#container > img") // id=container에 있는 하위 img를 정의한다

img.addEventListener("mouseover",()=>{
    img.src = "images/pic-6.jpg";
})
img.addEventListener("mouseout",()=>{
    img.src = "images/pic-1.jpg";
})