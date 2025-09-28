// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const humidity = document.querySelector('#humidity');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const wind = document.querySelector('#wind');

const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');
const after = document.querySelector('#after');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-30.007&lon=-51.116&units=metric&appid=a50f0158038f498a6fc1f69355f187d1';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {

    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    low.innerHTML = `${data.main.temp_min}&deg;C`;
    high.innerHTML = `${data.main.temp_max}&deg;C`;
    wind.innerHTML = `${data.wind.speed} km/h`;
    humidity.innerHTML = `${data.main.humidity} %`;

    let imageurl = document.createElement("img");

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    imageurl.setAttribute('src', iconsrc);
    imageurl.setAttribute('alt', `${data.name} weather icon`);

    weatherIcon.appendChild(imageurl);
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
}


/// forecast

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-30.007&lon=-51.116&units=metric&cnt=3&appid=a50f0158038f498a6fc1f69355f187d1';

async function apiFetch2() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayForecast(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch2();

function displayForecast(data) {

    today.innerHTML = `${data.list[0].main.temp_min}&deg;C - ${data.list[0].main.temp_max}&deg;C`;
    tomorrow.innerHTML = `${data.list[1].main.temp_min}&deg;C - ${data.list[1].main.temp_max}&deg;C`;
    after.innerHTML = `${data.list[2].main.temp_min}&deg;C - ${data.list[2].main.temp_max}&deg;C`;
}