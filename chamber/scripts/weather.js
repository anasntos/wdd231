const apiKey = 'SUA_API_KEY'; // Troque pela sua chave da OpenWeatherMap
const city = 'Campo Largo,BR';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const weatherToday = data.list[0];
    document.querySelector('#weather-temp').textContent = `Temperature: ${Math.round(weatherToday.main.temp)}°C`;
    document.querySelector('#weather-desc').textContent = `Condition: ${weatherToday.weather[0].description}`;

    const forecast = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    const forecastContainer = document.querySelector('#forecast');
    forecast.forEach(day => {
      const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
      forecastContainer.innerHTML += `<p><strong>${date}:</strong> ${Math.round(day.main.temp)}°C</p>`;
    });
  });
