
// defined function
function getNumberTotal(number1, number2) {
    return number1 + number2
}

// anonymous functions
const subtractNumbers = (number1, number2) => { return number1 - number2}
const multiplyNumbers = function(number1, number2) {
    return number1 * number2
}

const total = getNumberTotal(23, 99)
const difference = subtractNumbers(833, 76)
const product = multiplyNumbers(9, 20)
console.log(total, difference, product)