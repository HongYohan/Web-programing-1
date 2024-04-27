class Lecture { // 클래스 선언
    constructor(hasTutor, lectID, members){
        this.hasTutor = hasTutor;
        this.lectID = lectID;
        this.members = members;
    }
}

function getStudents(classRoom) {
    // 클래스에 있는 false, 'L001', ["Ahn", "Han", "Park"] 들을 가져와 각 각과 연결됨
    let {hasTutor, lectID, members} = classRoom; 
    let tutor, students;
    // [tutor,...students] = ahn, han, park 로 표현이 되서 tutor은 ahn이고 나머지는 students로 된다
    hasTutor ? [tutor,...students] = members : [...students] = members; // hasTutor이 true or false 
    return students; // 학생만 반환
}
  
let class1 = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]); // 클래스 선언시 값을 형식에 맞게 입력
let class2 = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);

console.log(`강의 : ${class1.lectID}, 수강생 : ${getStudents(class1)}`);
console.log(`강의 : ${class2.lectID}, 수강생 : ${getStudents(class2)}`);