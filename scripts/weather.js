const currentTemp = document.querySelector("#idTemp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-desc");
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tecamac,mx&units=imperial&APPID=26cb9a54253d333c2de21a527a128b2d';

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp} F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc =  data.weather[0].description;
  weatherIcon.setAttribute('src', `${iconsrc}`);
  weatherIcon.setAttribute('alt', `${desc}`);
  weatherDesc.textContent = `${desc.toUpperCase()}`;
}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        //console.log(data);
        displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (e) {
    console.log(e);
  }
}

apiFetch();