// API endpoint and credentials
const API_URL = 'https://weatherapi-com.p.rapidapi.com/current.json';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const API_HOST = 'weatherapi-com.p.rapidapi.com';

// Cities to display weather for
const cities = [
  { name: 'London', lat: 51.5074, lon: -0.1278 },
  { name: 'New York', lat: 40.7128, lon: -74.0060 },
  { name: 'Tokyo', lat: 35.6895, lon: 139.7670 },
  { name: 'Sydney', lat: -33.8651, lon: 151.2099 },
];

// Create a container to display the weather data
const weatherContainer = document.createElement('div');
weatherContainer.classList.add('weather-container');
document.body.appendChild(weatherContainer);

// Function to fetch weather data for a city
function fetchWeather(city) {
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const response = JSON.parse(this.responseText);
      displayWeather(city, response);
    }
  });

  const params = `q=${city.lat}%2C${city.lon}`;
  xhr.open('GET', `${API_URL}?${params}`);
  xhr.setRequestHeader('x-rapidapi-key', API_KEY);
  xhr.setRequestHeader('x-rapidapi-host', API_HOST);
  xhr.send();
}

// Function to display the weather data for a city
function displayWeather(city, data) {
  const weatherHTML = `
    <h2>${city.name}</h2>
    <p>Temperature: ${data.current.temp_c}°C</p>
    <p>Condition: ${data.current.condition.text}</p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Wind Speed: ${data.current.wind_kph} km/h</p>
  `;
  const cityContainer = document.createElement('div');
  cityContainer.classList.add('city-container');
  cityContainer.innerHTML = weatherHTML;
  weatherContainer.appendChild(cityContainer);
}

// Fetch and display weather data for each city
cities.forEach((city) => {
  fetchWeather(city);
});
