class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
  
    run = function () {
        alert(`${this.name} is running.`);    
    }
}
  
  class Cat extends Pet { // cat 클래스는 pet 클래스에 상속받는다
    constructor(name, color, breed) {
        super(name, color); // 상위 클래스에서 수행
        this.breed = breed;
    }
  
    viewInfo() { // 정보 확인 메서드 생성
        alert(`이름 : ${this.name},  품종 : ${this.breed},  색깔 : ${this.color}`);
    }
}

const bori = new Cat("보리", "흰색", "코숏"); // 클래스 생성과 선언
bori.viewInfo(); // 메서드 수행