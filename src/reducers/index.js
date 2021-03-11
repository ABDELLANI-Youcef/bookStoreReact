const booksAlready = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const response = await fetch('https://tranquil-caverns-54399.herokuapp.com/books', options);
    const booksData = await response.json();
    console.log(booksData);
    // const state = weatherData.weather[0].main;
    // const tempDegree = (weatherData.main.temp - 273.15).toFixed(1);
    // getPicture(state);
    // resultsShow.style.display = 'block';
    // cityName.textContent = place;
    // weather.textContent = state;

    // temperatureC.textContent = `${tempDegree}°C`;
    // temperatureF.textContent = `${degCelToFeh(tempDegree)}°F`;
    // humidity.textContent = weatherData.main.humidity;
    // windSpeed.textContent = `${(weatherData.wind.speed * 3.6).toFixed(2)}`;
    // const d = (((weatherData.wind.deg + 360 - 22.5) / 45) % 8).toFixed(0);
    // windDirection.textContent = directions[d];
    // errMessage.style.display = 'none';
  } catch (error) {
    // errMessage.style.display = 'block';
    console.error(error);
  }
};

booksAlready();

const defaultBooks = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'The war through the history',
    category: 'History',

  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Harry Potter',
    category: 'Action',

  },
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Life of Bill Gates',
    category: 'Biography',

  },
];

export default defaultBooks;
