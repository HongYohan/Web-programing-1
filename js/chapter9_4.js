function Book(title,price){
    this.title = title;
    this.price = price;
}

// prototype으로 매서드 선언
Book.prototype.buy = function() {
    alert(`${this.title}을(를) ${this.price}원에 구매하였습니다`)
}

const book1 = new Book("ABCDE",10000);
book1.buy();

function Textbook(title, price, major){
    Book.call(this,title,price) // 기존 객체를 불러옴
    this.major = major;
}

Textbook.prototype.buyTextbook = function(){
    alert(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`)
}

// textbook과 book의 프로토타입으로 연결한다
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2= new Textbook("알고리즘",5000,"컴퓨터공학")
book2.buyTextbook()
book2.buy();