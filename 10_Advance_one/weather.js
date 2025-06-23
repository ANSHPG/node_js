const api_key = "a1c44272941b28a565a8da53aef4b0eb";
const location = "Canberra";

async function coordinate() {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${api_key}`;
    const resolve = await fetch(url);
    const response = await resolve.json();
    return {
      lat: response[0].lat,
      lon: response[0].lon,
    };
  } catch (error) {
    throw new Error('E:',error)
  }
}

async function data() {
  try {
    const position = await coordinate();
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${api_key}`;
    const resolve = await fetch(geoUrl);
    const response = await resolve.json();
    const status = {
      main: response["weather"][0].main,
      description: response["weather"][0].description,
      name: response["name"],
    };
    console.log(status);
  } catch (error) {
    console.log("E5:", error);
  }
}

data();
