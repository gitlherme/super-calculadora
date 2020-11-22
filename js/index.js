let firstInput = document.querySelector("#firstNumber");
let secondInput = document.querySelector("#secondNumber");


firstInput.addEventListener('input', () => {
    start()
})

secondInput.addEventListener('input', () => {
    start()
})

function sum() {
    let resultSum = document.querySelector('#result-sum')
    resultSum.value = parseInt(firstInput.value) + parseInt(secondInput.value)
}

function subfs() {
    let resultSum = document.querySelector('#result-sub-fs')
    resultSum.value = parseInt(firstInput.value) - parseInt(secondInput.value)
}


function start() {
    sum()
    subfs()
}