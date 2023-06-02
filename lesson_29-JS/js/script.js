const glibKalikov = 32; 
const vita_Rud = 30;
const  KhrystynaHoryacha =31;
const PAVLO_KRUCH =29;

// неправильне ім'я 
/*неправильне ім'я №
 2 */ 


//  Норма
 const name = prompt('Your name ?'); 
 alert(`Hello, ${name}!`);

 const age = prompt('Your age ?'); 
 alert(`Your age, ${age}!`);

 const square = prompt('what is the length of the side of the square ?'); 
 const amount = Number(square) * 4;
 alert (`the perimeter of this square, ${amount}!`);


// Максимум
// 1.
const radius = prompt('circle radius ?');
const areaCircle = (Number(radius) * Number(radius) *  Math.PI);
alert(areaCircle);

// 2.
const distance = prompt('what is the distance in km ?');
const time = prompt('in how many hours ?');
const speed = Number(distance) / Number(time);
alert(`your speed should be ${speed} km`);

// 3.
const dollars = prompt('how many dollars ?');
const exchange = Number(dollars) * 0.92;
alert(`it will ${exchange} euro`);





