// Базовий рівень:

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log('Користувач увійшов в систему');
  }

  logout() {
    console.log('Користувач вийшов з системи');
  }

  changeName(newName) {
    this.name = newName;
    console.log(`Ім'я користувача змінено на ${newName}`);
  }

  changePassword(newPassword) {
    console.log(`Пароль користувача змінено на ${newPassword}`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`Користувач ${user.getName()} доданий`);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log(`Користувач ${user.getName()} видалений`);
    } else {
      console.log('Користувач не знайдений');
    }
  }

  changeUserRole(user, newRole) {
    if (user instanceof User) {
      user.role = newRole;
      console.log(`Роль користувача ${user.getName()} змінено на ${newRole}`);
    } else {
      console.log('Некоректний користувач');
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log('Усі користувачі видалені');
  }
}

const user = new User('Petro', 'user');
console.log(user.getName()); 
console.log(user.getRole());
user.login(); 
user.changeName('Bob'); 
user.changePassword('123456789'); 
user.logout();


const admin = new Admin('Admin');
console.log(admin.getName());
console.log(admin.getRole()); 
admin.login(); 
admin.addUser(user);
console.log(admin.getAllUsers()); 
admin.changeUserRole(user, 'admin'); 
admin.removeUser(user);
admin.removeAllUsers(); 
admin.logout();

// Середній рівень:

class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.clockElement = document.createElement('div');
    this.clockElement.classList.add('clock');
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString(undefined, { timeZone: this.timezone });
  }

  getCurrentDateTime() {
    const date = new Date();
    return date.toLocaleString(undefined, { timeZone: this.timezone });
  }

  deleteClock(deleteButton) {
    clearInterval(this.intervalId);
    this.clockElement.remove();
   
    const addClockButton = document.getElementById('addClockButton');
    addClockButton.disabled = false;
    deleteButton.parentNode.remove();
  }

  updateTime() {
    const currentTime = this.getCurrentDateTime();
    this.clockElement.textContent = currentTime;
  }
}


const timezoneInput = document.getElementById('timezoneInput');
const addClockButton = document.getElementById('addClockButton');
const clockContainer = document.getElementById('clockContainer');


function createDeleteButton(clock) {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('deleteButton');
  deleteButton.addEventListener('click', () => {
    clock.deleteClock(deleteButton);
  });
  return deleteButton;
}


addClockButton.addEventListener('click', () => {
  const timezone = timezoneInput.value;
  if (timezone) {
    const clock = new WorldClock(timezone);

    const clockElement = document.createElement('div');
    clockElement.classList.add('clockWrapper');
    clockElement.appendChild(clock.clockElement);
    clockElement.appendChild(createDeleteButton(clock));

    clockContainer.appendChild(clockElement);

    addClockButton.disabled = true;
  }
});

function createShowTimeButton() {
  const showTimeButton = document.createElement('button');
  showTimeButton.innerText = 'Show Time';
  showTimeButton.classList.add('showTimeButton');
  showTimeButton.addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current Time: ${currentTime}`);
  });
  return showTimeButton;
}

// America/New_York
// Europe/London
// Europe/Paris 
// Asia/Tokyo
// Australia/Sydney
// Europe/Kiev
// Europe/Dublin
// Europe/Berlin
// Asia/Shanghai
// America/Toronto