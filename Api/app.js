const express = require('express')
const app = express()
'use strict';

const fs = require('fs');


app.use(express.json())


const port = 3000



app.get('/api/camisetas', (req, res) => {
    let()
    res.send('Camisetas.json')
})


app.listen(port)