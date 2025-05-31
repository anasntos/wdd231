const apiKey = 'cea6e806013821228e2916c681ede83d'; // Substitua pela sua chave da OpenWeatherMap
const city = 'Campo Largo,BR';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro da API: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const weatherToday = data.list[0];
    const temp = Math.round(weatherToday.main.temp);
    const desc = weatherToday.weather[0].description;
    const iconCode = weatherToday.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.querySelector('#weather-temp').textContent = `Temperatura: ${temp}°C`;
    document.querySelector('#weather-desc').innerHTML = `Condição: ${desc} <img src="${iconUrl}" alt="${desc}">`;

    const forecast = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    const forecastContainer = document.querySelector('#forecast');

    forecast.forEach(day => {
      const date = new Date(day.dt_txt).toLocaleDateString('pt-BR', { weekday: 'long' });
      forecastContainer.innerHTML += `<p><strong>${date}:</strong> ${Math.round(day.main.temp)}°C</p>`;
    });
  })
  .catch(error => {
    console.error('Erro ao buscar dados do clima:', error);
    document.querySelector('#weather-temp').textContent = 'Climate data unavailable';
    document.querySelector('#weather-desc').textContent = '';
  });

