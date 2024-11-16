const baseURL = "https://landesud.github.io/wdd230/";
const linksURL = "https://landesud.github.io/wdd230/data/links.json";
const weeklist = document.querySelector("#weeklist");

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    let li = document.createElement('li');
    let weeknum = week.lesson;

    li.textContent = `${weeknum}: `;

    week.links.forEach((link, index) => {
      let anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.title;
      anchor.target = '_blank';

      li.appendChild(anchor);

      if (index < week.links.length - 1) {
        li.appendChild(document.createTextNode(' | '));
      }
    });

    weeklist.appendChild(li);
  });
}

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();

  // console.table(data.lessons);
  displayLinks(data.lessons);
}

getLinks();

