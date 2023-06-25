const user = localStorage.getItem('user');

console.log('user :>> ', user);

if (user) {
  window.location.href = window.location.href.replace('index', 'home');
} else {
  window.location.href = window.location.href.replace('index', 'login');
}