const numberMap = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
}

const reducer = (accumulator, curr) => accumulator + numberMap[curr]

const arrayConverter = (givenArray) => {

    let results = []
}

n = 345
let curr = Array.from(String(n), Number).reduce(reducer, '')
console.log(curr)