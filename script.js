
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
                console.log(data.results[0]);
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
