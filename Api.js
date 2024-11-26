import axios from 'axios';

const fetchWeather = async (city) => {
  const apiKey = '2319a4923b92364b8d016ff2293c6ad7';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
