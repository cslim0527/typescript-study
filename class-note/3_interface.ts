// 인터페이스 정의
interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
    age: 33,
    name: '세호'
}

// **함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}

const capt = {
    name: '캡틴'
}

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
}

let sum: SumFunction
sum = (a:number, b:number): number => {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string
}

const arr: StringArray = ['a', 'b', 'c']
arr[0] = '하이' // 통과
// arr[1] = 123 // 오류

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

const obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

Object.keys(obj).forEach(value => {})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

const joo: Developer = {
    name: '주형',
    age: 20,
    language: 'ts'
}