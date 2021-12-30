class Person {
    // 멤버 변수 타입 정의
    private name: string
    public age: number
    readonly log: string // 읽기 전용
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

// 리액트 클래스 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 훅 - 함수형 코드
function App() {
    return <div>Hello world</div>
}

// 뷰
new Vue({
  el: '',
  setup() {

  }
})