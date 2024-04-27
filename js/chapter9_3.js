// function Cylinder(cylinderDiameter, cylinderHeight){
//    this.diameter=cylinderDiameter;
//    this.height=cylinderHeight;
//    this.getVolume = function(){
//        let radius = this.diameter/2;
//        return (Math.PI*radius*radius*this.height).toFixed(2);
//    };
//}

class Cylinder { // 클래스 선언
    constructor(cylinderDiameter, cylinderHeight){
        this.diameter = cylinderDiameter;
        this.height = cylinderHeight;
    }
    getVolume = function(){ // 메서드
        let radius = this.diameter/2;
        return (Math.PI*radius*radius*this.height).toFixed(2);
    }
}

// let cylinder = new Cylinder(8,10)
// alert(`원기둥 부피: ${cylinder.getVolume()}`)

const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    const diameter = document.querySelector("#cyl-diameter").value;
    const height = document.querySelector("#cyl-height").value;

    if (diameter === "" || height === "") {
        result.innerText = `지름값과 높잇값을 입력하세요.`;
    }
    else {
        let cylinder = new Cylinder(parseInt(diameter), parseInt(height)); // 인스턴스 생성
        result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`; // 부피 계산해서 result 영역에 표시
    }
});