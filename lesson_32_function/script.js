// Мінімум
// 1.
// Function Declaration
function showMessage(a,b) {
  return a + b;
}
console.log(showMessage(2,2)); 

// Function Expression
const add = function(a, b) {
  return a / b;
};
console.log(add(10,5));

// Arrow functions
const multiply = (a, b) => a * b; 
multiply(50,50);// 2500
 

// 2.
function number(a,b,c,d) {
  return arguments.length;
}
console.log(number(2,3,4,5));
 

// .3
function compareNumbers(a,b) {
  if (a < b) {
   return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
console.log(compareNumbers(0,10));


// .4
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); //120 


// 5.
const a = 1;
const b = 4;
const c = 9;
function  combineDigits(a,b,c) {
  let result = Number(`${a}${b}${c}`) 
  return result;
}
console.log(combineDigits(a,b,c));


// 6.
function rectangle(a, b) {
  if (b === undefined) {
   return  a * a;
  } else {
    return a * b;
  }
}
console.log(rectangle(20,30)); //600
console.log(rectangle(20)); //400

// Норма
// 1.
 function perfectNum(number) {
  divisorSum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      divisorSum += i;
    }
  }
  if (divisorSum === number) {
    return true;
  } else {
    return false;
  }
 }
 console.log(perfectNum(6)); //true // 6,28,496   - досконалі числа.

 function findPerfect(a,b) {
  for (let num9 = a; num9 <= b; num9++) {
    if (perfectNum(num9)) {
      console.log(num9);
    }
  }
 }
 console.log(findPerfect(1,1000)); //6,28,496 - це всі досконалі числа в діапазоні тисячи.
