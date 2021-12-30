// function logMessage(value: any) {
//     console.log(value)
// }
//
// logMessage('hello')
// logMessage(100)

// 유니온 타입
let zoo: string | number | boolean;

// 타입 가드
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString()
    }

    if (typeof value === 'string') {
        value.toString()
    }

    throw new TypeError('value must be string or number')
}

logMessage('hello')
logMessage(100)

//유니온 타입 특징: 공통된 속성에만 조건을 통과한다
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // someone.name // 공통된 속성에 접근 가능
    // someone.skill
    // someone.age
}

// function askSomeone(someone: Developer & Person) {
//     someone.name // 공통된 속성에 접근 가능
//     someone.skill
//     someone.age
// }

askSomeone({name: '디벨로퍼', skill: '웹 개발'})
askSomeone({name: '디벨로퍼', skill: '웹 개발'})

// | (유니온 타입) & (인터섹션 타입)
let person_1: string | number | boolean // 둘중 하나
let person_2: string & number & boolean // 둘다 포함
