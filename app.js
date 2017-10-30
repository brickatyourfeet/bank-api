const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan');
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(bodyParser.json())
