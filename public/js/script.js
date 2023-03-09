// const { response } = require("express");

navigator.geolocation.getCurrentPosition(function(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = 'http://localhost:3000/';

  const data = {
    latitude: latitude,
    longitude: longitude
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response=>response.json()).then(data=>{
    document.getElementById('location-desc').innerHTML = data.name +" , "+data.sys.country;
    document.getElementById("imgg-we-image").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    document.getElementById("temp-img").innerHTML = (data.main.temp-273.15).toString().slice(0,4) + '&deg;C';
    document.getElementById("weather-main").innerHTML = "Sky : "+ data.weather[0].main;
    document.getElementById("general-wind-speed").innerHTML = '<i class="fa-solid fa-wind"></i>'+data.wind.speed+'km/h';
    document.getElementById('general-humidity').innerHTML = '<i class="fa-solid fa-droplet"></i>'+data.main.humidity+'%';
    document.getElementById("general-pressure").innerHTML = '<i class="fa-solid fa-minimize"></i>'+data.main.pressure/100+'Bar';
    document.getElementById('temp').innerHTML = `<i class="fa-solid fa-temperature-low"></i><br>Temp:${(data.main.temp-273.15).toString().slice(0,4)}&deg;C <br>feels like:${(data.main.feels_like-273.15).toString().slice(0,4)}&deg;C <br>temp min:${(data.main.temp_min-273.15).toString().slice(0,4)}&deg;C <br> temp max:${(data.main.temp_max-273.15).toString().slice(0,4)}&deg;C`
    document.getElementById('level').innerHTML= `<i class="fa-solid fa-arrow-up-from-water-pump"></i><br><br>ground level:${data.main.grnd_level} <br> sea level:${data.main.sea_level}<br><br><br>`
    document.getElementById('visibility').innerHTML = `<i class="fa-sharp fa-regular fa-eye"></i><br><br>visibility:${data.visibility}<br><br><br><br><br>`;
    document.getElementById('wind').innerHTML = `<i class="fa-solid fa-wind"></i><br><br>Speed:${data.wind.speed}km/h <br> direction:${data.wind.deg}&deg; <br>Gust:${data.wind.gust}<br><br><br>`
    document.getElementById('sun').innerHTML = `<i class="fa-solid fa-sun"></i><br><br>Sunrise:${data.sys.sunrise} <br>Sunset:${data.sys.sunset}<br><br><br><br><br>`
  })
});