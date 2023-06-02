// Мінімум
// 1.
const num = 0.1;
const num2 = 0.2;
console.log(Math.round((num + num2) * 100) / 100 );

// 2.
const a = '1';
const b = 2;
console.log(Number(a) + b);

// 3.
const file = 820;
const flashDrive = prompt('How many GB is a flesh drive?');
const use = (Number(flashDrive) * 1000);
const g = (use / file);
alert(`${Math.floor(g)} files will be stored`);

// Норма
// 1.
const purse = +prompt('How much money is in the wallet');
const chocolate = +prompt('What is a price for chocolate bar');
const howMuch = (Math.floor(purse / chocolate));
const rest =  (purse % chocolate);
alert(`The amount of chocolats that you can affort ${howMuch}`);
alert(`Your rest ${Math.floor(rest)}`);

// 2.
let number = +prompt('Your number?');
let i = 0;
let reverse = 0;
while (i < 3) {
  let lastDigit = Math.floor(number % 10);
  reverse = (reverse * 10) + lastDigit;
  number = number / 10;
  i++;
}
console.log(reverse);

// Максимум
// 1.
let amount = +prompt('Your amount?');
let numberOfMonths = 12;
const percentagePerYear = 5;
const percentagePerTwoMonths = percentagePerYear * 2 / numberOfMonths;
alert (`Amount of charges ${Math.round (percentagePerTwoMonths * amount / 100)}`);

// 2.
2 && 0 && 3  // поверне 0 або false;

2 || 0 || 3  // поверне 2 або true;

2 && 0 || 3  // поверне 3 або true;
 



