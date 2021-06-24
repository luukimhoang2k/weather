let elementDom = document.querySelector('#search-input');
let cityDom = document.getElementById('city');
let desDom1 = document.getElementById('description1');
let desDom2 = document.getElementById('description2');
let humidityDom = document.getElementById('humidity');
let windDom = document.getElementById('wind');
let temperatureDom = document.getElementById('temperature');
let imgDom = document.querySelector('#image');
elementDom.onchange = function (e) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ac78aee9bd170133a579df11892c82ad&lang=vi`)
        .then(function (response) {
            return response.json();
        }).then(function (result) {
            imgDom.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
            cityDom.innerHTML = `Thành phố : ${result.name}`;
            temperatureDom.innerHTML = `Nhiệt độ trung bình : ${Math.floor(result.main.temp / 10)}'C`;
            windDom.innerHTML = `Sức gió : ${result.wind.speed}m/s`;
            humidityDom.innerHTML = `Độ ẩm : ${result.main.humidity}%`;
            desDom1.innerHTML = `Miêu tả : ${result.weather[0].description}`;
            if (result.main.humidity > 60) {
                desDom2.innerHTML = `Dự báo khả năng có mưa cao`;
            }
            else {
                desDom2.innerHTML = ``;
            }
            console.log(result);
        });
}
