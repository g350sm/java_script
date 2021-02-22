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

let resultAdd = addition(10, 5);
alert(resultAdd);

let resultSub = subtraction(10, 5);
alert(resultSub);

let resultDiv = division(10, 5);
alert(resultDiv);

let resultMul = multiplication(10, 5);
alert(resultMul);
