const bttn = document.getElementById('bttn'); // 아이디로 변수를 받아냄
const nav = document.querySelector('#nav');

bttn.addEventListener("click", () => { 
    nav.classList.toggle("active");
    bttn.classList.toggle("active");
});