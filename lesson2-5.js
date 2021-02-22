'use strict'; 
/**
* функция складывает параметры a и b
*/
function addition(a, b) {
    return a + b;
}

/**
* функция вычитает из параметра a параметр b
*/
function subtraction(a, b) {
    return a - b;
}

/**
* функция делит параметр a на b
*/
function division(a, b) {
    return a / b;
}

/**
* функция умножает параметр a на b
*/
function multiplication(a, b) {
    return a * b;
}

/**
*Функция получает два числа и совершает над ними математическую операцию.
*/
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена"); 
    
        }
    }
    
console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "*"));
console.log(mathOperation(3, 5, "lorem"));