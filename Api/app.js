const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
'use strict';

app.use(express.json())

const port = 3000

app.use(cors())




app.get('/api/camisetas', (req, res) => {
    let data = fs.readFileSync('../Datos/Camisetas.json');
    let camisetas = JSON.parse(data);
    console.log(camisetas);
    res.send(camisetas);
})


app.listen(port)