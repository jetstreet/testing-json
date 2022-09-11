const express = require('express')
const products = require('./data/products')
const app = express()

app.get('/api', (req, res) => {
  res.json(products)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`running on port ${port}`))
