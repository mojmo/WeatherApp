const elements = {
    inputCity: document.querySelector(".search-input"),
    searchBtn: document.querySelector(".search-btn"),
    cityName: document.querySelector(".city-name"),
    temp: document.querySelector(".temp"),
    weatherDescription: document.querySelector(".weather-description"),
    humidity: document.querySelector(".humidity"),
    windSpeed: document.querySelector(".wind-speed"),
    visibility: document.querySelector(".visibility"),
    icon: document.querySelector(".icon"),
};

const openWeatherSettings = {
    async: true,
    crossDomain: true,
    baseApiUrl: "https://api.openweathermap.org/data/2.5/weather",
    apiKey: "7174c66a24f42690c9f089cd53652286",
    units: "metric",
};

const getWeatherSettings = (city) => ({
    async: true,
    crossDomain: true,
    url: `${openWeatherSettings.baseApiUrl}?q=${city}&id=524901&appid=${openWeatherSettings.apiKey}&units=${openWeatherSettings.units}`,
    method: "GET",
});

$.ajax({
    ...getWeatherSettings("london"),
}).done(display);

elements.searchBtn.addEventListener("click", weather);

elements.inputCity.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        weather();
    }
});

function weather() {
    const city = elements.inputCity.value;
    if (city) {
        $.ajax(getWeatherSettings(city)).done(display);
    }
}

function display(response) {
    const { main, weather, wind, visibility, name } = response;

    elements.cityName.innerHTML = name;
    elements.temp.innerHTML = main.temp;
    elements.weatherDescription.innerHTML = weather[0].description;
    elements.humidity.innerHTML = `Humidity: ${main.humidity}%`;
    elements.windSpeed.innerHTML = `Wind Speed: ${wind.speed} m/s`;
    elements.visibility.innerHTML = `Visibility: ${visibility / 1000}`;
    elements.icon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
}
