const membersJSON = "https://landesud.github.io/wdd230/chamber/data/members.json";
const spotlightCards = document.querySelector(".spotlight-cards");

const displayMembers = (members) => {
  
for (let i = 0; i < 3 && i < members.length; i++) {
    let member = members[i];

    let memberCard = document.createElement("div");
    memberCard.setAttribute('class', 'spotlight-card');
    
    let memberName = document.createElement("h3");
    memberName.textContent = `Company: ${member.company}`;

    let memberDetails = document.createElement("p");
    memberDetails.textContent = `${member.other}`;

    let membership = document.createElement("p");
    membership.textContent = `Membership Status: ${member.membership}`;

    let memberLinks = document.createElement("div");
    memberLinks.setAttribute('class', 'spotlight-links');

    let phone = document.createElement("a");
    phone.setAttribute("href", "#");
    phone.textContent = `${member.phone}`;   

    let website = document.createElement("a");
    website.setAttribute("href", `${member.website}`);
    website.textContent = `${member.website}`;



    memberCard.appendChild(memberName);
    memberCard.appendChild(memberDetails);
    memberCard.appendChild(membership);
    memberCard.appendChild(memberLinks);
    memberLinks.appendChild(phone);
    memberLinks.appendChild(website);

    spotlightCards.appendChild(memberCard);

  };
}


async function getData() {
  const response = await fetch(membersJSON);
  const data = await response.json();
  displayMembers(data.members);
}

getData();