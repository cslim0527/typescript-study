// 타입 단언
var a;
a = 20 // 중간에 바뀐 값의 타입이 추론되지 않음
a = 'a'
var b = a as string // 타입스크립트가 추론하는것보다 개발자가 타입을 우선시 정의할때

// DOM API 조작 시
// <div id="app">Hello World</div>
const divEl = document.querySelector('div')

const appEl = document.querySelector('#app')
if (appEl) {
    appEl.innerText = 'this is appEl'
}

const appEl2 = document.querySelector('#app2') as HTMLDivElement
appEl2.innerText = 'this is appEl2'
