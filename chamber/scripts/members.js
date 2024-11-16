const membersURL = "https://landesud.github.io/wdd230/chamber/data/members.json";
const memberCards = document.querySelector("#memberCards");

const displayMembers = (members) => {
  members.forEach((member) => {
    let memberCard = document.createElement("div");
    let memberName = document.createElement("h3");
    let memberPhone = document.createElement("p");
    let memberAddress = document.createElement("address");
    let memberUrl = document.createElement("p");
    let memberImg = document.createElement("img");
    let memberLevel = document.createElement("p");
    let memberDetails = document.createElement("p");

    memberCard.setAttribute('class', 'memberCard');
    memberName.setAttribute('class', 'memberName');
    memberPhone.setAttribute('class', 'memberPhone');
    memberAddress.setAttribute('class', 'memberAddress');
    memberUrl.setAttribute('class', 'memberUrl');
    memberImg.setAttribute('class', 'memberImg');
    memberImg.setAttribute('src', member.image);
    memberImg.setAttribute('alt', member.company);
    memberImg.setAttribute('loading', 'lazy');
    memberImg.setAttribute('width', '280');
    memberImg.setAttribute('height', '260');
    memberLevel.setAttribute('class', 'memberLevel');
    memberDetails.setAttribute('class', 'memberDetails');

    memberName.textContent = `Company: ${member.company}`;
    memberPhone.textContent = `Phone: ${member.Phone}`;
    memberAddress.textContent = `Address: ${member.address}`;
    memberUrl.textContent = `Website: ${member.website}`;
    memberLevel.textContent = `Level: ${member.membership}`;
    memberDetails.textContent = `Details: ${member.other}`;

    memberCard.appendChild(memberName);
    memberCard.appendChild(memberPhone);
    memberCard.appendChild(memberAddress);
    memberCard.appendChild(memberUrl);
    memberCard.appendChild(memberImg);
    memberCard.appendChild(memberLevel);
    memberCard.appendChild(memberDetails);

    memberCards.appendChild(memberCard);

  });
}

async function getData() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data.members);
}

getData();