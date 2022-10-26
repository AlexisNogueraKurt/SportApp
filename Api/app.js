const express = require('express')
const app = express()
'use strict';

const fs = require('fs');


app.use(express.json())


const port = 3000


app.get('/api/camisetas', (req, res) => {
    let data = fs.readFileSync('../Datos/Camisetas.json');
    let camisetas = JSON.parse(data);
    console.log(camisetas);
    res.send(camisetas);
})


app.listen(port)