const API_KEY = "501a485b5c1f98b9324c5090d03e8026";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.getElementById("weather");
      const city = document.getElementById("city");

      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}°`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  return false;
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
