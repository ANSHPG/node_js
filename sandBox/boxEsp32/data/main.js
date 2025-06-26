const api_key = "a1c44272941b28a565a8da53aef4b0eb";

const celcius = (temp) => {
  return parseFloat((temp - 273.15).toFixed(2));
};

document.querySelector('#srch_bttn').addEventListener("click", () => {
  const location = document.querySelector("#location").value;
  if (location) {
    getWeather(location);
  }
},false);

async function getCoordinates(location) {
  try {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.length > 0) {
      return {
        lat: data[0].lat,
        lon: data[0].lon
      };
    } else {
      throw new Error("Location not found");
    }
  } catch (err) {
    alert("Error fetching location coordinates.");
    console.error(err);
  }
}

async function getWeather(location) {
  try {
    const coords = await getCoordinates(location);
    if (!coords) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    
    const weather = {
      location: `${data.name}, ${data.sys.country}`,
      temp: celcius(data.main.temp),
      feels_like: celcius(data.main.feels_like),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      description: data.weather[0].description
    };

    renderWeather(weather);
  } catch (err) {
    alert("Error fetching weather data.");
    console.error(err);
  }
}

function renderWeather(w) {
  const res = document.getElementById("response");
  res.innerHTML = `
    <p><strong>Location:</strong> ${w.location}</p>
    <p><strong>Temperature:</strong> ${w.temp} \u2103</p>
    <p><strong>Feels Like:</strong> ${w.feels_like} \u2103</p>
    <p><strong>Humidity:</strong> ${w.humidity}%</p>
    <p><strong>Weather:</strong> ${w.main} - ${w.description}</p>
  `;
}
