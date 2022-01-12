// 타입 추론 (Type Inference)

// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi'
    return b + c
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
//
// var shoppingItem: Dropdown<String> = {
//     value: 'abc',
//     title: 'bag-pack'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropDown<K> extends Dropdown<K> {
    description: string;
    tag: K;
    value,
    title,
}

var detailedItem: DetailedDropDown<number> = {
    title: 'abc',
    description: 'def',
    value: 'ghi',
    tag: 3000
}

// Best Common Type (어떤 타입인지 매겨나가는 알고리즘 같은것)
var arr = [1, 2, false, 'a']  // 자동으로 유니온 타입으로 추론함
