/*
 함수를 호출 할때 인자의 타입을 정의 할 수 있다.
* */
function logText<T>(text: T): T {
    console.log(text)
    return text
}

logText<string>('콘솔 메세지 입니다.')

// 제네릭의 장점

function logText2(text: string) {
    console.log(text)
    text.split('').reverse().join()
    return text
}

logText2('a')

function logNumber(num: number) {
    console.log(num)
    return num
}

// 유니온 활용하기
function logText3(text: string | number) {
    console.log(text)
    return text
}

logText3(1)
logText3('텍스트')

// 제네릭의 장점과 타입 추론에서의 이점
function logText4<T>(text: T): T {
    console.log(text)
    return text
}

const str = logText4<string>('a')
str.split('')
const login = logText4<boolean>(true)

// 인터페이스에 제네릭 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
//
// const obj:Dropdown = {
//     value: 'abc',
//     selected: false
// }

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj:Dropdown<number> = {
    value: 50,
    selected: false
}

// 제네릭의 타입 제한

// logTextLength<T> -> 함수에 들어갈 수 있는 타입을 정의
// text: T -> 인자값의 타입을 정의
// (): T -> 반환값의 타입을 정의
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length)
    return text;
}

logTextLength<string>(['hi'])

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length
    return text
}

logTextLength2('a')
logTextLength2(10)
logTextLength2({length: 50})

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// 인터페이스 ShoppingItem 중 한가지의 속성으로 타입을 제한한다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption
}

getShoppingItemOption(10)
getShoppingItemOption("price")