const storage = window.localStorage;
storage.setItem('name', 'John');

const user = {
  name: 'Petro',
  age: 44,
}

const users = [
  {
    name: 'Petro',
    age: 44,
  }
]

// storage.setItem('user', JSON.stringify(user));
// storage.setItem('users', JSON.stringify(users));

// console.log('users :>> ', users);
// // storage.removeItem('name');
// const userData = storage.getItem('user');
// const usersData = storage.getItem('users');

// console.log('usersData :>> ', JSON.parse(usersData));
// console.log('userData :>> ', JSON.parse(userData));
// console.log('storage :>> ', storage);

// storage.clear();


const items = [
  {
    name: 'apple',
    price: 44,
  }
]

storage.setItem('items', JSON.stringify(items))

const newItems = JSON.parse(storage.getItem('items'));

console.log('newItems :>> ', newItems);

// for (const item of newItems) {
//   document.body.insertAdjacentHTML('afterbegin', `<p>${item.name}</p>`)
// }
//////////////////////////////////////////////////////////////////////////////////////////


const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  const user = {
    name,
    email,
    password
  }

  storage.setItem('user', JSON.stringify(user))

  window.location.href = window.location.href.replace('login', 'home');
  console.log('formData :>> ', formData);
  // const name = document.querySelectorAll('input')
  // exampleInputEmail1.value
})