// JS 문자열 선언
const str = 'hello'

// TS 문자열 선언
const ts_str: string = 'hello'
const ts_num: number = 10

// TS 배열 선언
const ts_arr: Array<number> = [1,2,3]
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk']
const items: number[] = [4,5,6]

// TS 튜플 (배열의 특정 인덱스의 타입을 지정)
const address: [string, number] = ['gangnam', 500]

// TS 객체
const obj: object = {}
const person: object = {
    name: 'Capt',
    age: 100
}

const people: {name: string, age: number} = {
    name: 'Capt',
    age: 100
}

// TS 진위값
const show: boolean = true