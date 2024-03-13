require('dotenv').config();

const express = require('express');

const app = express();

const PORT =  process.env.PORT;


app.get('/', (req, res) => {

    res.send('Welcome ')
})

app.listen(PORT, () => {

    console.log(` the server is running on port http://localhost:${PORT}`);
})