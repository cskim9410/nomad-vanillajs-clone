
const API_KEY = "c881a2bcaa04335d39c2332fd7b0c016"

function onGeoOK(position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = data.weather[0].main
        city.innerText = data.name
    })
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError)
