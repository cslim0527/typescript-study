class Person {
//  클래스 로직
  constructor() {
    console.log('생성 되었습니다.')
    this.name = name
    this.age = age
  }
}

new Person() // console -> 생성 되었습니다.
const seho = new Person('세호', 30)
console.log(seho)

// 자바스크립트의 프로토타입과 클래스 관계

// 생성자 함수 패턴
function  Person(name, age) {
  this.name = name
  this.age = age
}

const capt = new Person('Capt', 30)