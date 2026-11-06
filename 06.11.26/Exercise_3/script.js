async function getWeather() {
  const response = await fetch("https://wttr.in/Moscow?format=j1");
  const data = await response.json();
  const current = data.current_condition[0];

  console.log(`Температура: ${current.temp_C}°C`);
  console.log(`Влажность: ${current.humidity}%`);
  console.log(`Погода: ${current.weatherDesc[0].value}`);
}

getWeather();
