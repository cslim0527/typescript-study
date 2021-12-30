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
