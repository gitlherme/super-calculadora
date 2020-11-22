let firstInput = document.querySelector('#firstNumber');
let secondInput = document.querySelector('#secondNumber');

firstInput.addEventListener('input', () => {
  calculate();
});

secondInput.addEventListener('input', () => {
  calculate();
});

function sum(valueA, valueB) {
  let resultSum = document.querySelector('#result-sum');
  resultSum.value = valueA + valueB;
}

function subfs(valueA, valueB) {
  let resultSum = document.querySelector('#result-sub-fs');
  resultSum.value = valueA - valueB;
}

function subsf(valueA, valueB) {
  let resultSum = document.querySelector('#result-sub-sf');
  resultSum.value = valueB - valueA;
}

function mult(valueA, valueB) {
  let resultSum = document.querySelector('#result-mult');
  resultSum.value = valueA * valueB;
}

function divfs(valueA, valueB) {
  let resultSum = document.querySelector('#result-div-fs');
  valueB === 0
    ? (resultSum.value = 'Divisão por 0')
    : (resultSum.value = (valueA / valueB).toFixed(2));
}

function divsf(valueA, valueB) {
  let resultSum = document.querySelector('#result-div-sf');
  valueA === 0
    ? (resultSum.value = 'Divisão por 0')
    : (resultSum.value = (valueB / valueA).toFixed(2));
}

function expA(value) {
  let resultSum = document.querySelector('#result-exp-f');
  resultSum.value = value ** 2;
}

function expB(value) {
  let resultSum = document.querySelector('#result-exp-s');
  resultSum.value = value ** 2;
}

function calculate() {
  let valueA = parseInt(firstInput.value);
  let valueB = parseInt(secondInput.value);
  sum(valueA, valueB);
  subfs(valueA, valueB);
  subsf(valueA, valueB);
  mult(valueA, valueB);
  divfs(valueA, valueB);
  divsf(valueA, valueB);
  expA(valueA);
  expB(valueB);
}
