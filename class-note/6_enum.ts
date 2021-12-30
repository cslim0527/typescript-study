enum Shoes {
    Nike,
    Adidas
}

let myShoes = Shoes.Nike
console.log(myShoes)

enum Name {
    Jason = '제이슨',
    Mark = '마크'
}

let myName = Name.Jason
console.log(myName)

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer == Answer.Yes) {
        console.log('정답입니다.')
    }

    if (answer == Answer.No) {
        console.log('오답입니다.')
    }
}

askQuestion(Answer.Yes)