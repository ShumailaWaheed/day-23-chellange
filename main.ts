// Question: 67

function addNumberAndString(num: number, strNum: string): number {
    const parsedStrNum: number = parseFloat(strNum);
    return num + parsedStrNum;
}

// Example usage:
const result: number = addNumberAndString(5, "10");
console.log(result); // Output will be 15

// Question: 68

function multiplyDecimals(num1: number, num2: number): number {
    const product: number = num1 * num2;
    const roundedProduct: number = Math.round(product * 100) / 100; // Round to two decimal places
    return roundedProduct;
}

// Example usage:
const result1: number = multiplyDecimals(3.14159, 2.71828);
console.log(result); // Output will be approximately 8.54

// Question: 69

function divideAndFindRemainder(dividend: number, divisor: number): { quotient: number, remainder: number } {
    const quotient: number = Math.floor(dividend / divisor);
    const remainder: number = dividend % divisor;

    return { quotient, remainder };
}

// Example usage:
const result2 = divideAndFindRemainder(10, 3);
console.log(result); // Output will be { quotient: 3, remainder: 1 }

