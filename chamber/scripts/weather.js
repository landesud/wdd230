const currentTemp = document.querySelector("#wind-temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-desc");
const weatherHumidity = document.querySelector("#wind-humidity");
const windSpeedId = document.querySelector("#wind-speed");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3= document.querySelector("#day3");
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tecamac,mx&units=imperial&APPID=26cb9a54253d333c2de21a527a128b2d';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Tecamac,mx&units=imperial&APPID=26cb9a54253d333c2de21a527a128b2d';

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp} F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc =  data.weather[0].description;
  let humidity = data.main.humidity;
  let wSpeed = data.wind.speed;
  weatherIcon.setAttribute('src', `${iconsrc}`);
  weatherIcon.setAttribute('alt', `${desc}`);
  weatherDesc.textContent = `${desc.toUpperCase()}`;
  weatherHumidity.textContent = `${humidity}`;
  windSpeedId.textContent = `${wSpeed}mph`;

}

function displayResultsForecast(data) {
  day1.textContent = `${data.list[0].main.temp} ºF | ${data.list[0].weather[0].description}`;
  day2.textContent = `${data.list[1].main.temp} ºF | ${data.list[1].weather[0].description}`;
  day3.textContent = `${data.list[2].main.temp} ºF | ${data.list[2].weather[0].description}`;
}


async function currentWeather() {
  try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResultsForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (e) {
    console.log(e);
  }
}

async function forecastWeather() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResultsForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (e) {
    console.log(e);
  }
}

// currentWeather();
forecastWeather();