// 1.
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error("Радіус не є додатним!");
    }
    this._radius = value;
  }

  get diameter() {
    return 2 * this._radius;
  }

  area() {
    return Math.PI * (this._radius ** 2);
  }

  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

const myCircle = new Circle(5);

console.log("Радіус кола:", myCircle.radius);

myCircle.radius = 7;

console.log("Діаметр кола:", myCircle.diameter);

console.log("Площа кола:", myCircle.area());

console.log("Довжина кола:", myCircle.circumference());


// 2.
class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  write(text) {
    let remainingInk = this.inkLevel;
    let output = '';

    for (let i = 0; i < text.length; i++) {
      if (remainingInk >= 0.5) {
        if (text[i] !== ' ') {
          output += text[i];
          remainingInk -= 0.5;
        } else {
          output += ' ';
        }
      } else {
        break;
      }
    }

    console.log('%c' + output, `color: ${this.color}`);
  }
}

class RefillableMarker extends Marker {
  refill(inkAmount) {
    this.inkLevel += inkAmount;
    console.log(`Маркер підзаправлено. Поточний рівень чорнила: ${this.inkLevel}%`);
  }
}
const marker = new Marker('blue', 70);

marker.write('Hello, world! This is a marker.');

const refillableMarker = new RefillableMarker('red', 50);

refillableMarker.write('I am a refillable marker.');

refillableMarker.refill(30);

// 3.

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = `<table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>`;

    for (let employee of this.employees) {
      html += `<tr>
                 <td>${employee.name}</td>
                 <td>${employee.position}</td>
               </tr>`;
    }

    html += `</tbody>
             </table>`;

    return html;
  }
}

// Створення масиву працівників банку
const employees = [
  new Employee('Микола Афін', 'Manager'),
  new Employee('Джон  Смітов', 'Developer'),
  new Employee('Марі Кюрі', 'Accountant')
];

const empTable = new EmpTable(employees);

const htmlCode = empTable.getHtml();

document.body.innerHTML = htmlCode;

