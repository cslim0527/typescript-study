// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

const seho: Person = {
    name: '세호',
    age: 30
}

// 타입 별칭: 정의한 타입에 대해 나중에 수비게 참고할 수 있게 이름을 부여하는 것.
type MyString = string
const str: MyString = 'hello'

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo) {

}

// 타입과 인터페이스 차이점
// type은 확장이 불가능하지만 interface는 확장이 가능하기때문에 추천한다.