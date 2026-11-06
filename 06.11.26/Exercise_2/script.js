async function getWeather() {
  const response = await fetch("https://wttr.in/Moscow?format=j1");
  const data = await response.json();
  console.log(data);
}

getWeather();
