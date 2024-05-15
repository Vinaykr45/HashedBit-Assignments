// 1. Write code to display from 1 to 100 but just even numbers.

const even = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

const calculate = (operation, num1, num2) => {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Division by zero!";
            }
            break;
        default:
            result = "Invalid operation!";
    }
    return result;
}

console.log(calculate('add',20,30))
console.log(calculate('sub',20,30))
console.log(calculate('mul',20,30))
console.log(calculate('div',20,30))

// You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

const findTax = (salary) => {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
     
        taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3; 
            break;
        default:
            return "Invalid salary!";
    }
    if(taxRate==0){
        return salary;
    }
    else{
        return salary * taxRate;
    }
}

console.log(findTax(1500000))

// Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 || n2 > 0) {
        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}

console.log(sumOfProducts(6,34))