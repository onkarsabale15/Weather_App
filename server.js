const express = require('express');
const app = express();
const https = require('https')
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("The Server Has Started\nListening on port :", PORT, `\nTo Access on local Machine ctrl + click on ==> http://localhost:${PORT}/`)
});

let lon = '73.75'
let lat = '18.64'
let api_key = '934ede4e3ee38b51eb16e280d1cc1224'
let dta
https.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,(resp)=>{
    res.on(data)
})

app.get('/', (req,res)=>{
    console.log("A New User Just Connected")
    res.send(dta)
});