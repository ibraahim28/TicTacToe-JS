const display = document.getElementById("display");

const operators = ["+", "-", "/", "*"];

const cannotUseAtStart = ["+", "/", "*", "."];

function pressKey(key) {
  if (display.value.replace("-", "") === "") {
    if (cannotUseAtStart.includes(key)) {
      return;
    } else {
      let lastIndex = display.value.slice(-1);
      if (operators.includes(lastIndex) && operators.includes(key)) {
        display.value = display.value.slice(0, -1) + key;
      } else {
        display.value += key;
      }
    }
  } else {
    let lastIndex = display.value.slice(-1);
    if (operators.includes(lastIndex) && operators.includes(key)) {
      display.value = display.value.slice(0, -1) + key;
    } else {
      display.value += key;
    }
  }
}

function calculate() {
  display.value = eval(display.value);
  if (display.value === "undefined") [
    display.value = ""
  ]
}

function clearDisplay() {
  display.value = "";
}

function undoNumber() {
  display.value = display.value.slice(0, -1);
}