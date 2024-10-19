const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const article = document.querySelector("article");
article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContet property does not';

