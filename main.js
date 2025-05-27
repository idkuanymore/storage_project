const apiKey = 'OPENWEATHER_API'; // OPENWEATHER API
const currentTemperatureDisplay = document.getElementById('currentTemperature');
const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeather');
let CURRENT_MIN = 0;
let CURRENT_MAX = 0;
const maxTempDisplay = document.getElementById('max-temperature');
const minTempDisplay = document.getElementById('min-temperature');

// Handler max/min 
const handleTempChange = (elementId, value) => {
  const tempDisplay = document.getElementById(elementId);
  tempDisplay.textContent = value;
};

document.getElementById('increase-temperature-max').addEventListener('click', () => handleTempChange('max-temperature', ++CURRENT_MAX));
document.getElementById('decrease-temperature-max').addEventListener('click', () => handleTempChange('max-temperature', --CURRENT_MAX));
document.getElementById('increase-temperature-min').addEventListener('click', () => handleTempChange('min-temperature', ++CURRENT_MIN));
document.getElementById('decrease-temperature-min').addEventListener('click', () => handleTempChange('min-temperature', --CURRENT_MIN));

maxTempDisplay.textContent = CURRENT_MAX;
minTempDisplay.textContent = CURRENT_MIN;
// request to api
getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value;
  if (city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      currentTemperatureDisplay.textContent = data.main.temp.toFixed(1);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      currentTemperatureDisplay.textContent = 'Ошибка';
    }
  }
});
