// mathOperations.js

/**
 * Adds two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts one number from another.
 * @param {number} a The number to subtract from.
 * @param {number} b The number to subtract.
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides one number by another.
 * @param {number} a The dividend.
 * @param {number} b The divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} Throws an error if division by zero is attempted.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
