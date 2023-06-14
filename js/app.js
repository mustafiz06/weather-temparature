const API_KEY = `317f28873c0c20bb6c0fc598017e2cbd`;

const loadTemparature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}
const displayTemparature = data => {
    const temparature = document.getElementById('temparature');
    temparature.innerText = data.main.temp
}
// const displayTemparature = data => {
//     setInnerTextById('temparature', data.main.temp);
//     setInnerTextById('condition', data.weather[0].main)
// }
document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search_field');
    const city = searchField.value;
    loadTemparature(city)
    const displayCity = document.getElementById('display-city');
    displayCity.innerText = city;
    searchField.value = ''
})



// loadTemparature('dhaka')
