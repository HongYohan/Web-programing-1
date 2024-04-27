class Pet { // 펫 클래스 생성
    constructor(name, color) { // 해당 클래스의 수행
        this.name = name; // 가져온 name을 해당 클래스에 넣어둠
        this.color = color; // 가져온 color을 해당 클래스에 넣어둠
    }
  
    run = function () {
        alert(`${this.name} is running.`);
    }
}
const cheez = new Pet("치즈", "yellow"); // 클래스 생성 및 선언
cheez.run(); // 클래스 내부에 기능 수행