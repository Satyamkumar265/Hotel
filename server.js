const express = require('express')
const app = express();
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

const personRouter = require('./Routes/routePerson');
app.use('/person', personRouter);

const menuRouter = require('./Routes/routemenu');
app.use('/menu', menuRouter);

app.listen(4000)