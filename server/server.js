const path = require('path');

port = process.env.PORT || 3000;

const express = require('express');

const app = express();
const publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));

app.listen(port);
console.log(`The server is up on the port ${port}`);