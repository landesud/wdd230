const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");

const darkMode = document.querySelector('.switch input');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


darkMode.addEventListener('change', function() {
  if (darkMode.checked) {
    console.log("Executed");
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
    sections.forEach(section => {
      section.style.backgroundColor = "var(--black)";
      section.style.color = "var(--gray)";
    });
  } else {
    body.style.backgroundColor = "";
    body.style.color = "";
    sections.forEach(section => {
      section.style.backgroundColor = "";
      section.style.color = "";
    });
  }
});