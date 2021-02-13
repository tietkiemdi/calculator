class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
  }

  clear() {

  }

  delete() {

  }

  appendNumber(number) {

  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    
  }


}







const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

