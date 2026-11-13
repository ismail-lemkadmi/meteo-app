
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city");
const errorMessage = document.getElementById("error");
const loading = document.getElementById("loading");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let city = cityInput.value.trim();

    errorMessage.style.display = "none";

    if (city === "") {
        errorMessage.textContent = "Veuillez entrer une ville";
        errorMessage.style.display = "block";
        return;
    }

    loading.style.display = "block";

    let url = "https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(city) + "&count=1";

    fetch(url)
        .then(function(response) {
            if (response.ok === false) {
                throw new Error("Erreur API");
            }

            return response.json();
        })
        .then(function(data) {
            if (data.results) {
                
let latitude = data.results[0].latitude;
let longitude = data.results[0].longitude;

console.log(latitude);
console.log(longitude);

let weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude;

weatherUrl = weatherUrl + "&longitude=" + longitude;

weatherUrl = weatherUrl + "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code";
weatherUrl = weatherUrl + "&daily=temperature_2m_max,temperature_2m_min,weather_code";
weatherUrl = weatherUrl + "&timezone=auto&forecast_days=6";

fetch(weatherUrl)
    .then(function(response) {
        return response.json();
    })
    
.then(function(data) {
    console.log(data.current);
    console.log(data.daily);

let forecastList = document.getElementById("forecast-list");

forecastList.textContent = "";

for (let i = 1; i <= 5; i++) {
    let card = document.createElement("div");

    card.className = "forecast-card";

    
let date = new Date(data.daily.time[i] + "T12:00:00");

let dateText = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long"
});
let weatherCode = data.daily.weather_code[i];

console.log(dateText, weatherCode);


let min = data.daily.temperature_2m_min[i];
let max = data.daily.temperature_2m_max[i];

if (min === null || min === undefined) {
    min = "Donnée indisponible";
} else {
    min = min + "°C";
}

if (max === null || max === undefined) {
    max = "Donnée indisponible";
} else {
    max = max + "°C";
}

card.textContent = dateText + " : " + min + " / " + max;

        

    forecastList.appendChild(card);
}

    let temperature = document.getElementById("temperature");
    let cityName = document.getElementById("city-name");

    temperature.textContent = data.current.temperature_2m + "°C";
    cityName.textContent = city;
    let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

humidity.textContent = data.current.relative_humidity_2m + "%";
wind.textContent = data.current.wind_speed_10m + " km/h";
});



            } else {
                errorMessage.textContent = "Ville introuvable";
                errorMessage.style.display = "block";
            }
        })
        .catch(function(error) {
            errorMessage.textContent = "Erreur de connexion";
            errorMessage.style.display = "block";
        })
        .finally(function() {
            loading.style.display = "none";
        });
});
