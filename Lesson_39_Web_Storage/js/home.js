const userData = localStorage.getItem('user');

console.log('userData :>> ', userData);

if (userData) {
  const user = JSON.parse(localStorage.getItem('user'));
  user.age = 55;

  localStorage.removeItem('user');
  localStorage.setItem('user', JSON.stringify(user));

  document.querySelector('.email').innerText = user.email;
  document.querySelector('h2').innerText += `, ${user.name}!`;
} else {
  window.location.href = window.location.href.replace('home', 'login');
}


const logOutBtn = document.querySelector('#log-out');

logOutBtn.addEventListener('click', function () {
  localStorage.removeItem('user');

  window.location.href = window.location.href.replace('home', 'index');
})
