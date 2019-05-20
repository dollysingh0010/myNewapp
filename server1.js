const express = require('express')
var url = "https://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22"


const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.send("Hi dolly")

})

app.listen(port , () => console.log(`Server started at ${port}`));