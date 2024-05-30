"use strict";
// Question: 67
function addNumberAndString(num, strNum) {
    const parsedStrNum = parseFloat(strNum);
    return num + parsedStrNum;
}
// Example usage:
const result = addNumberAndString(5, "10");
console.log(result); // Output will be 15
// Question: 68
function multiplyDecimals(num1, num2) {
    const product = num1 * num2;
    const roundedProduct = Math.round(product * 100) / 100; // Round to two decimal places
    return roundedProduct;
}
// Example usage:
const result1 = multiplyDecimals(3.14159, 2.71828);
console.log(result); // Output will be approximately 8.54
// Question: 69
function divideAndFindRemainder(dividend, divisor) {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return { quotient, remainder };
}
// Example usage:
const result2 = divideAndFindRemainder(10, 3);
console.log(result); // Output will be { quotient: 3, remainder: 1 }
