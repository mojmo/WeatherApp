let inputCity = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");
let cityName = document.querySelector(".city-name");
let temp = document.querySelector(".temp");
let weatherDescription = document.querySelector(".weather-description");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind-speed");
let visibility = document.querySelector(".visibility");
let icon = document.querySelector(".icon");

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=khartoum&lat=0&lon=0&id=2172797&lang=en&units=metric",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        "X-RapidAPI-Key": "a2a5cb1cccmsh88cd62d1ed8b204p1ff3f0jsn2e184c845a9b",
        "Access-Control-Allow-Origin": "*"
    }
};

$.ajax(settings).done(function (response) {
    display(response)
});

searchBtn.addEventListener("click", () => {
    weather();
});

inputCity.addEventListener("keyup", (event) => {
    if(event.code == "Enter") {
        weather();
    }
});

function weather() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/weather?q="+ inputCity.value +"&lat=0&lon=0&id=2172797&lang=en&units=metric",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
            "X-RapidAPI-Key": "e8d5694c29msh0b7491831ea308ap16edf1jsn3f54c881a736",
            "Access-Control-Allow-Origin": "*"
        }
    };
    
    $.ajax(settings).done(function (response) {
        display(response)
    });
};

function display(response) {

    cityName.innerHTML = response.name;
    temp.innerHTML = response.main.temp;
    weatherDescription.innerHTML = response.weather[0].description;
    humidity.innerHTML = "Humidity : " + response.main.humidity + "%";
    windSpeed.innerHTML = "Wind Speed : " + response.wind.speed + " m/s";
    visibility.innerHTML = "Visibility : " + response.visibility / 1000;
    icon.src = "http://openweathermap.org/img/wn/"+ response.weather[0].icon + "@2x.png";

};
