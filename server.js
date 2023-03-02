const env = require('dotenv')
env.config()
const express = require('express');
const app = express();
const https = require('https')
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("The Server Has Started\nListening on port :", PORT, `\nTo Access on local Machine ctrl + click on ==> http://localhost:${PORT}/`)
});

let lon = '73.75'
let lat = '18.64'
let api_key = process.env.API_KEY
let dta
https.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,(resp)=>{
    resp.on('data', (data)=>{
        dta = JSON.parse(data)
    })
})

app.get('/', (req,res)=>{
    console.log("A New User Just Connected")
    res.send(dta)
});