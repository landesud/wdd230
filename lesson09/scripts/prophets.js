const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");


const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthDate = document.createElement("p");
    let deathDate = document.createElement("p");
    let birthPlace = document.createElement("p");
    let plength = document.createElement("p");
    let porder = document.createElement("p");
    let childrenCount = document.createElement("p");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440'); 

    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    deathDate.textContent = `Date of Death: ${prophet.death}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthPlace}`;
    plength.textContent = `Length: ${prophet.length}`;
    porder.textContent = `Order #${prophet.order}`;
    childrenCount.textContent = `Number of Children: ${prophet.numofchildren}`;

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(deathDate);
    card.appendChild(birthPlace);
    card.appendChild(plength);
    card.appendChild(porder);
    card.appendChild(childrenCount);
    card.appendChild(portrait);

    cards.appendChild(card);
    
  });
}


async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);

  displayProphets(data.prophets);
}

getProphetData();