const env = require('dotenv')
env.config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const https = require('https')
app.use(express.static(__dirname + '/public'))
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("The Server Has Started\nListening on port :", PORT, `\nTo Access on local Machine ctrl + click on ==> http://localhost:${PORT}/`)
});




app.get('/', (req, res) => {
    console.log("A New User Just Connected")
    res.sendFile(__dirname + '/index.html')
});

app.post('/', (req, res) => {
    const lat = req.body.latitude;
    const lon = req.body.longitude;
    // console.log(`Received location: ${latitude}, ${longitude}`);
    // res.sendStatus(200);
    let api_key = process.env.API_KEY
    let dta
    https.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`, (resp) => {
        resp.on('data', (data) => {
            data = JSON.parse(data)
            res.send(data)
        })
    })
    // console.log(dta)
    // res.send(dta)
});