
require('dotenv').config();

var express = require('express');

var app = express();

require('./app')(app);

app.listen(app.get('port'), () => {
    console.log(`My server is listening to PORT: ${app.get('port')}`);
});