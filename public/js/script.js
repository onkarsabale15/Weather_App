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
    // document.write(JSON.stringify(data))
    console.log('Server response:', data);
  })
});
