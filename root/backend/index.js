const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({
  path: './config/config.env',
});

const app = express();

app.get('/', (req, res) => res.send('Hello from Node!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow.bold));
