let addButton = document.createElement('button')
addButton.append('ADD')
let multiplyButton = document.createElement('MULTIPLY')
let divideButton = document.createElement('DIVIDE')

function add (x, y) {
    return x + y
}

function multiply (x, y) {
    return x * y
}

function divide (x, y) {
    return x / y
}

function calculator (x, y, equipment) {
    return equipment (x, y)
}

const addOutput = calculator(1, 2, add)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(1, 2, divide) 

console.log({ addOutput, multiplyOutput, divideOutput })


// xxx Create buttons on the page for Add, Multiply, and Divide, 
// and write a click event listener for each button, which calls the calculator
// with the correct x and y values and the correct callback function
// You will need two textboxes: one for x, and one for y.

const mainElement = document.querySelector('main')
const outputElement = documnet.querySelector('Output')
const xInput = doucment.createElement('input')
xInput.type = "number"
xInput.setAttribute("placeholder")
const yInput = document.createElement('input')
yInput.type = "number"
yInput.placeholder = "0"

const addButton = document.createElement('button')
addButton.appent('+')

const multiplyButton = document.createElement('button')
multiplyButton.append('*')

const divideButton = document.createElement('button')
divideButton.append('/')

MainElement.append(
    xInput, 
    yInput, 
    addButton, 
    multiplyButton, 
    divideButton
)

addButton.addEventListener('click', function () {
    console.log('add button click is working')
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    console.log({ x, y })

    const reult = calculator(x, y, add)
    console.log({ result })
    // outputElement.append(result)
    outputElement.innerHTML = result
})

multiplyButton.addEventListener('click', function () {
    console.log('multiply button click is working')
    const x = Number(xInput.value)
    const y = Number(yInput.value)
    console.log({ x, y })

    const reult = calculator(x, y, multiply)
    console.log({ result })
    // outputElement.append(result)
    outputElement.innerHTML = result
})