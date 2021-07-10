//======================GEO LOCATION==========================

function onGeoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log('You live in', lat, lng);
}
function onGeoError() {
  console.log(`error`);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

//===================WEATHER API====================================
const APIKEY = `08534ac244fcfd168c6f362552431a93`;
const LAT = `39.9966651780648`;
const LNG = `116.48153685725704`;
const weather = document.querySelector('#weather');

async function getWeather() {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LNG}&appid=${APIKEY}&units=metric&lang=zh_cn`
  );
  const weatherJson = await weatherData.json();
  const temp = weatherJson.main.temp;
  const daily = weatherJson.weather[0].description;
  const location = weatherJson.name;
  weather.firstChild.textContent = `Temperature : ${temp}°C`;
  weather.lastChild.textContent = `${daily} in ${location}`;
}

getWeather();
