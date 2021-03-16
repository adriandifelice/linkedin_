require('dotenv').config()

const express = require('express');
const Router = require('./routes/index');
const Port = 3000;


const app = express();



app.use(dotenv);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', Router);


app.listen(Port, () => {
  console.log(`Server is running on port ${Port}.`)
})

module.exports = app;
