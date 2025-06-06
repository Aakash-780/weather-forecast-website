const apiKey = "72ff8df00da956b595c7f96e68b9050b";

const input = document.querySelector(".input");
const searchbtn = document.querySelector(".search-btn");
const weatherImage = document.querySelector(".weather-image img");

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);

  if (data.cod === "404"){
    alert("❌ City not found. Please check the spelling and try again.");
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "&deg;C";
  document.querySelector(".value-w").innerHTML = (data.wind.speed * 3.6).toFixed(2) + " Km/h";
  document.querySelector(".value-h").innerHTML = data.main.humidity + " %";

  if (data.weather[0].main==="Clouds"){
    weatherImage.src = "images/few-clouds.png";
  }

  else if (data.weather[0].main=="Clear"){
    weatherImage.src = "images/clear-sky.png";
  }
  
  else if (data.weather[0].main=="Rain"){
    weatherImage.src = "images/raining.png";
  }

  else if (data.weather[0].main=="Drizzle"){
    weatherImage.src = "images/raining.png";
  }
  
  else if (data.weather[0].main=="Mist"){
    weatherImage.src = "images/mist.png";
  }
  
  else if (data.weather[0].main=="Snow"){
    weatherImage.src = "images/snow.png";
  }
  
  
  
};

searchbtn.addEventListener("click", () => {
    getWeather(input.value);
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getWeather(input.value);
  }
});

