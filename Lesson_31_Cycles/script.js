// // Мінімум
// // 1.
let age = +prompt('Ваш вік');
if (age <= 11) {
  alert('Дитина')
} else if (age <=17) {
  alert('Підліток')
} else if (age <= 59) {
  alert('Дорослий')
} else if (age < 100) {
  alert('Пенсіонер')
} else {
  alert('Неправильні дані')
};

// 2.
let symbo = +prompt('введіть цифру від 0 до 9');
 switch (symbo) {
  case 0 :
    alert (')');
    break;
    case 1 :
    alert ('!');
    break;
    case 2 :
    alert ('@');
    break;
    case 3 :
    alert ('#');
    break;
    case 4 :
    alert ('$');
    break;
    case 5 :
    alert ('%');
    break;
    case 6 :
    alert ('^');
    break;
    case 7 :
    alert ('&');
    break;
    case 8 :
    alert ('*');
    break;
    case 9 :
    alert ('(');
    break;
  default: 
  alert('Неправильні дані');
    break;
 };

// //  3.
let num1 = +prompt('введіть початковий діапазон числа');
let num2 = +prompt('введіть кінцевий  діапазон числа');
let sum = null;
 for (num1 = num1; num1 <= num2;  num1++) {
  sum += num1;
 }
 alert(sum);    

//  4.
 let num3 = +prompt('введіть перше число');
 let num4 = +prompt('введіть друге число');
 let result = null;
 for (let i = 1; i <= num3 &&  i <= num4; i++) {
   if (num3 % i == 0 && num4 % i == 0) {
     result = i;
   }
 }
 alert(result);

// 5.
let num5 = +prompt('введіть число');
for (let i = 1; i <= num5; i++) {
  if (num5 % i === 0) {
    alert(i);
  }
};

// Норма
// 1.
let num6 = prompt("Введіть п'ятирозрядне число паліндром:");
let revers = null;

if (num6.length !== 5 || isNaN(num6)) {
  alert("Введене число не є п'ятирозрядним числом");
} else {
  revers = num6.split('').reverse().join('');
  if (num6 === revers) {
    alert("Число є паліндромом");
  } else {
    alert("Число не є паліндромом");
  }
}

// 2.
let num7 = +prompt("сума покупки");
if (num7 >= 200 && num7 < 300) {
   let discount = num7 * 0.03;
   let totalAmount = num7 - discount;
   alert(`Сума до оплати зі знижкою (3%): ${totalAmount}`);
  } else if (num7 >=300 && num7 < 500) {
    let discount = num7 * 0.05; 
    let totalAmount = num7 - discount;
    alert(`Сума до оплати зі знижкою (5%): ${totalAmount}`);
  } else if (num7 >= 500) {
    let discount = num7 * 0.07; 
    let totalAmount = num7 - discount;
    alert(`Сума до оплати зі знижкою (7%): ${totalAmount}`);
  } else {
    alert(`Сума до оплати без знижки ${num7}`);
  }

// 3.

let numbers = prompt("Введіть 10 чисел, розділених пробілами:");
let numberArray = numbers.split(" ");
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numberArray.length; i++) {
  let number = parseInt(numberArray[i]);
  
  switch (Math.sign(number)) {
    case 1:
      positiveCount++;
      break;
    case -1:
      negativeCount++;
      break;
    case 0:
      zeroCount++;
      break;
  }
  
  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
alert(`Кількість додатніх чисел: ${positiveCount}`);
alert(`Кількість від'ємних чисел: ${negativeCount}`);
alert(`Кількість нулів: ${zeroCount}`);
alert(`Кількість парних чисел: ${evenCount}`);
alert(`Кількість непарних чисел: ${oddCount}`);

// 4.
let day = 0;
let daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

do {
  alert(`${daysOfWeek[day]}. Хочеш побачити наступний день?`);
  day++;

  if (day === daysOfWeek.length) {
    day = 0;
  }
} while (confirm("Продовжити показ наступних днів тижня?"));

alert("Дякую за участь!");
 


  
