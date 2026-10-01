const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const weatherIconSymbol = document.getElementById("weather-icon-symbol");
const forecastList = document.getElementById("forecast-list");

// Data dummy untuk simulasi prakiraan 5 hari
const dummyForecastData = [
    { day: "Besok", icon: "fa-cloud-sun", temp: "28°C / 22°C" },
    { day: "Lusa", icon: "fa-cloud-showers-heavy", temp: "26°C / 21°C" },
    { day: "Rabu", icon: "fa-sun", temp: "31°C / 24°C" },
    { day: "Kamis", icon: "fa-cloud-bolt", temp: "25°C / 20°C" },
    { day: "Jumat", icon: "fa-cloud", temp: "27°C / 22°C" }
];

// Fungsi untuk menampilkan prakiraan cuaca 5 hari
function renderForecast(forecastData) {
    forecastList.innerHTML = ""; // Bersihkan data sebelumnya

    forecastData.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("forecast-item");

        itemElement.innerHTML = `
            <span class="forecast-day">${item.day}</span>
            <i class="fa-solid ${item.icon} forecast-icon"></i>
            <span class="forecast-temp">${item.temp}</span>
        `;

        forecastList.appendChild(itemElement);
    });
}

// Fungsi simulasi data cuaca tanpa perlu API Key
function checkWeather(city) {
    if (!city || city.trim() === "") return;

    // Kapitalisasi huruf pertama nama kota
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    // Set data dummy utama
    cityName.innerText = `${formattedCity}, ID`;
    temp.innerText = "29°C";
    condition.innerText = "Cerah Berawan";
    humidity.innerText = "78%";
    wind.innerText = "14 km/h";
    pressure.innerText = "1011 hPa";
    
    // Set ikon cuaca utama
    weatherIconSymbol.className = "fa-solid fa-cloud-sun";

    // Tampilkan data prakiraan cuaca
    renderForecast(dummyForecastData);
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