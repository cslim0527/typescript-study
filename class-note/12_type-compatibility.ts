// 타입 호환
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

class Person1 {
    name: string
}

var developer: Developer
var person: Person
developer = person // 인터페이스 조건이 맞지 않아 호환 되지 않음
person = developer // 변수보다 할당값이 구조가 같거나 큰 구조를 가져야함

developer = new Person1()

// 타입 호환 예제 - 함수, 제네릭
var add = function(a: number) {
    // ...
}

var sum = function(a: number, b: number) {
    // ...
}

sum = add;
add = sum // 함수의 경우 반대로

interface Empty<T> {
    // ...
}

var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
    data: T
}

var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>
notempty1 = notempty2 // 제네릭으로 넘겨진 타입이 다르므로 호환되지 않는다.
notempty2 = notempty1 // 제네릭으로 넘겨진 타입이 다르므로 호환되지 않는다.