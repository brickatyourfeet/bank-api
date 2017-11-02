const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan');
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(bodyParser.json())


const routes = require('./routes/routes.js')

//app.use('/', routes)




app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { status: 404, message: 'not found' } })
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Bank API listening on port ${port}!`)
  })
}


module.exports = app
