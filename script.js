const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const weatherIconSymbol = document.getElementById("weather-icon-symbol");

// Fungsi simulasi data cuaca tanpa perlu API Key
function checkWeather(city) {
    if (!city || city.trim() === "") return;

    // Kapitalisasi huruf pertama nama kota
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    // Set data dummy interaktif
    cityName.innerText = `${formattedCity}, ID`;
    temp.innerText = "29°C";
    condition.innerText = "Cerah Berawan";
    humidity.innerText = "78%";
    wind.innerText = "14 km/h";
    pressure.innerText = "1011 hPa";
    
    // Set ikon cuaca
    weatherIconSymbol.className = "fa-solid fa-cloud-sun";
}

// Event listener saat tombol cari diklik
searchBtn.addEventListener("click", () => {
    checkWeather(cityInput.value);
});

// Event listener saat menekan tombol Enter
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(cityInput.value);
    }
});

// Tampilkan kota awal saat halaman dibuka
checkWeather("Jakarta");