//calculator.js

function isValid(num1, num2) {
  return (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    !Number.isNaN(num1) &&
    !Number.isNaN(num2)
  );
}

export const calculator = {
  add(num1, num2) {
    return isValid(num1, num2) ? num1 + num2 : "";
  },
  subtract(num1, num2) {
    return isValid(num1, num2) ? num1 - num2 : "";
  },
  divide(num1, num2) {
    if (!isValid(num1, num2) || num2 === 0) return "";
    return num1 / num2;
  },
  multiply(num1, num2) {
    return isValid(num1, num2) ? num1 * num2 : "";
  },
};
