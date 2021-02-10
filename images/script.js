let buttons = document.querySelectorAll('button')
// console.log(buttons)
let display = document.querySelector('#screen')
let btnClear = document.querySelector('#btn-clear')
let btnGrey = document.querySelectorAll('.btn-grey')
let btnEqual = document.querySelector('#btn-equal')
console.log(btnGrey)
function inputChange(event) {
  console.log(event.target.innerText)
  const buttonText = event.target.innerText;
  display.innerText += buttonText;
}

function addAllEventListeners(button) {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', inputChange);
  }
}

addAllEventListeners(buttons);

function deleteBox() {
  display.innerText = '';
}
btnClear.addEventListener("click", deleteBox);

function noDitto() {
  display.innerText = operations(display.innerText)

}
btnEqual.addEventListener('click', sumNum)

function operations(array) {
  for (let i = 0; i <= array.length-1;i++){
    array[i].addEventListener("click", noDitto);
  }
  return btnGrey
}
operations(btnGrey)


function doMath(string) {
  if (string.includes('+')) {
    let str = string.split('+')
    return parseInt(str[0]) + parseInt(str[1])
  }
  if (string.includes('-')) {
    let str = string.split('-')
    return parseInt(str[0]) - parseInt(str[1])
  }
  if (string.includes('X')) {
    let str = string.split('X')
    return parseInt(str[0]) * parseInt(str[1])
  }
  if (string.includes('÷')) {
    let str = string.split('÷')
    return parseInt(str[0]) / parseInt(str[1])
    display.innerText += buttonText;
  }
  return 0
}

function sumNum() {
  display.innerText = doMath(display.innerText)

}
btnEqual.addEventListener('click', sumNum)




