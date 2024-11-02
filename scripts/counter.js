const displayvisits = document.querySelector('#pagevisits');
/* This is your first visit. 🥳 Welcome! */
let counter = Number(window.localStorage.getItem("ls-counter")) || 0;

if (counter !== 0) {
  displayvisits.textContent = counter;
} else {
  displayvisits.textContent = `This is your first visit. 🥳 Welcome!`;
}

counter++;

localStorage.setItem("ls-counter",counter);
