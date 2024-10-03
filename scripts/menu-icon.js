const hamBtn = document.querySelector('#menu');
const hamIconOpen = document.querySelector('.menu-icon-open');
const hamIconClose = document.querySelector('.menu-icon-close');
const navigation = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {
  navigation.classList.toggle('opened');
  hamIconOpen.classList.toggle('opened');
  hamIconClose.classList.toggle('opened');
});