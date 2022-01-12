// 타입 가드
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {
        name: 'Tony',
        age: 33,
        skill: 'Iron Making'
    }
}

const tony = introduce()
console.log(tony.name) // 접근 가능
console.log(tony.skill) // 공통된 속성이 아니기때문에 접근 할 수 없다.

// 타입 단언을 사용한 타입 구체화 -> 코드가 복잡함
if ((tony as Developer).skill) {
    const skill = (tony as Developer).skill
    console.log(skill)
} else if ((tony as Person).age) {
    const age = (tony as Person).age
    console.log(age)
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person ): target is Developer {
    return (target as Developer).skill !== undefined
}

if (isDeveloper(tony)) {
    tony.skill // Developer의 name과 skill에 접근가능
} else {
    tony.age // Person의 name과 age에 접근가능
}









