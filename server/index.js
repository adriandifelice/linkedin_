require('dotenv').config()

const express = require('express');
const Router = require('./router');
const Port = 3005;
const cors = require('cors')

const app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Router);


app.listen(Port, () => {
  console.log(`Server is running on port ${Port}.`)
})

module.exports = app;
