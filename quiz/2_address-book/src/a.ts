// function fetchItems(): string[] {
//     const items = ['a', 'b', 'c']
//     return items
// }
//
// const result = fetchItems()
// console.log(result)

function fetchItems(): Promise<string[]> {
    const items = ['a', 'b', 'c']
    return new Promise((resolve, reject) => {
        resolve(items)
    })
}

fetchItems()