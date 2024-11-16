const baseURL = "https://landesud.github.io/wdd230/";
const linksURL = "https://landesud.github.io/wdd230/data/links.json";

const displayLinks = (link) => {
  // https://byui-cse.github.io/wdd230-course/lesson09/aa-json.html
  // I left at step 4
}



async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();

 // displayLinks(data.lessons);
 console.table(data.lessons);;
}


getLinks() 
