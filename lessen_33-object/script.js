// Мінімум
// 1.
const car = {
  brand: 'Volvo',
  model: 'V50',
  year: 2022,
  averageSpeed: 100,
  fuelTankCapacity: 60,
  fuelConsumption: 8,
  drivers: [],

getInfoCar: function() {
 console.log('brand:', this.brand);
 console.log('Model:', this.model);
 console.log('Year:', this.year);
 console.log('Average Speed:', this.averageSpeed);
 console.log('Fuel Tank Capacity:', this.fuelTankCapacity);
 console.log('Fuel Consumption:', this.fuelConsumption);
 console.log('Drivers:', this.drivers);
},
addDriver: function(driverName) {
  this.drivers.push(driverName);
},
checkDriver: function(driverName) {
 if (this.drivers.includes(driverName)) {
  console.log('Водій', driverName, 'є в списку.');
 } else {
  console.log('Водій', driverName, 'нема в списку.');
 }
},

calculateTrip: function(distance) {
  const drivingTime = distance / this.averageSpeed;
  const breakTime = Math.floor(drivingTime / 4);
  const allDrivingTime = drivingTime + breakTime;
  const fuelNeeded = (distance / 100) * this.fuelConsumption;
  
  console.log('На відстані', distance, 'km');
  console.log('Час в дорозі:', allDrivingTime.toFixed(2), 'годин.');
  console.log('Потрібне паливо:', fuelNeeded.toFixed(2), 'літрів');
}
};

car.drivers = ['Bob', 'Glib'];
car.checkDriver('Boba'); // нема в списку.
car.getInfoCar();
car.calculateTrip(1000);


// Норма
// 2.
const  time = {
  hours: 10,
  minutes: 20,
  seconds: 0,
  displayTime: function() {
    let formattedHours = String(this.hours).padStart(2, '0');   // padStart - є методом рядка який додає символи до початку рядка!Цифра два то кількисть, а нуль то що треба додати.
    let formattedMinutes = String(this.minutes).padStart(2, '0');
    let formattedSeconds = String(this.seconds).padStart(2, '0');
    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  },
  changeTimeBySeconds: function(seconds) {
    this.seconds += seconds;
    this.adjustTime();
  },
  changeTimeByMinutes: function(minutes) {
    this.minutes += minutes;
    this.adjustTime();
  },
  changeTimeByHours: function(hours) {
    this.hours += hours;
    this.adjustTime();
  },

  adjustTime: function() {
    if (this.seconds >= 60) {
      let extraMinutes = Math.floor(this.seconds / 60);
      this.seconds %= 60;
      this.minutes += extraMinutes;

    } if (this.minutes >= 60) {
      let extraHours = Math.floor(this.minutes / 60);
      this.minutes %= 60;
      this.hours += extraHours;
    }
    if (this.hours >= 24) {
      this.hours %= 24;
    }
  }
};

time.displayTime(); // Виведе: 10:20:00

time.changeTimeBySeconds(30);
time.displayTime(); // Виведе: 10:20:30

time.changeTimeByMinutes(75);
time.displayTime(); // Виведе: 11:35:30

time.changeTimeByHours(2);
time.displayTime(); // Виведе: 13:35:30







