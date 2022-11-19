/* class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delele() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;

      case "-":
        computation = prev - current;
        break;

      case "x":
        computation = prev * current;
        break;

      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButtons = document.querySelector("[data-all-clear]");
const equalButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    calculator.appendNumber(buttons.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    calculator.chooseOperation(buttons.innerText);
    calculator.updateDisplay();
  });
});

equalButtons.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButtons.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButtons.addEventListener("click", () => {
  calculator.delele();
  calculator.updateDisplay();
});
 */

class Calculator {
  constructor(previousDisplay, currentDisplay) {
    this.previousDisplay = previousDisplay;
    this.currentDisplay = currentDisplay;
    this.clear();
  }

  clear() {
    this.currentNum = "";
    this.previouNun = "";
    this.operation = undefined;
  }

  chooseOperations(operation) {
    if (this.currentNum === "") return;
    if (this.previouNun !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previouNun = this.currentNum;
    this.currentNum = "";
  }

  deleteNums() {
    this.currentNum = this.currentNum.toString().slice(0, -1);
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previouNun);
    const current = parseFloat(this.currentNum);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentNum = computation;
    this.operation = undefined;
    this.previouNun = "";
  }

  appendNumbers(number) {
    if (number === "." && this.currentNum.includes(".")) return;
    this.currentNum = this.currentNum.toString() + number.toString();
  }

  updateDisplay() {
    this.currentDisplay.innerText = this.currentNum;

    this.previousDisplay.innerText = this.previouNun;
  }
}

const numbers = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const equalTo = document.querySelector("[data-equals]");
const deleteNums = document.querySelector("[data-delete]");
const allClear = document.querySelector("[data-all-clear]");
const previousDisplay = document.querySelector("[data-previous-operand]");
const currentDisplay = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousDisplay, currentDisplay);

numbers.forEach((nums) => {
  nums.addEventListener("click", () => {
    calculator.appendNumbers(nums.innerText);
    calculator.updateDisplay();
  });
});

allClear.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

operation.forEach((signs) => {
  signs.addEventListener("click", () => {
    calculator.chooseOperations(signs.innerText);
    calculator.updateDisplay();
  });
});

deleteNums.addEventListener("click", () => {
  calculator.deleteNums();
  calculator.updateDisplay();
});

equalTo.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
