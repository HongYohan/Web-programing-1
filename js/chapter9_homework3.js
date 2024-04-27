// Item 클래스(class)를 정의하기.
class Item {
    // constructor()함수에서 name, description 프로퍼티를 추가.
    constructor(name, description) {
        this.name = name;
        this.description = description;
      }
    // // displayInfo 메서드 추가: 아이템명과 설명이 알림창(alert()함수)에 표시되도록 정의.
    // displayInfo = function() {
    //     alert(`아이템 명: ${this.name}, 설명: ${this.description}`)
    // }
}
// Weapon 클래스는 Item 클래스를 상속받아 추가적으로 damage 속성을 가지며, 무기에 특화된 정보를 출력하는 기능이 있음.
class Weapon extends Item { // 기존 클래스를 상속하는 새로운 클래스를 만들려면 extends 예약어를 사용함.
    // 기존 클래스의 프로퍼티와 메서드를 그대로 사용하려면 constructor()함수에서 super()메서드 사용하기.
    constructor(name, description, damage) {
        super(name, description);
        this.damage = damage;
      }
    // Item클래스의 displayInfo() 메서드를 오버라이드하여 아이템 정보와 더불어 데미지 정보도 출력.

    // 즉, displayInfo()와 이름이 같은 메서드를 만들고, 데미지 정보도 출력하도록.
    displayInfo = function() {
        alert(`아이템 명: ${this.name}, 설명: ${this.description}, 데미지: ${this.damage}`);
    }
}




// [아이템 생성]버튼을 클릭하면, 폼에 입력한 값으로 Weapon 클래스의 인스턴스를 만들고,
// 인스턴스 객체에서 displayInfo() 메서드를 실행하기.
document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const damage = document.querySelector("#damage").value;
    
    const weapon = new Weapon(name, description, damage);
    weapon.displayInfo();
});
