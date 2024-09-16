const express = require('express')
const app = express()
const port = 3000

const pgp = require('pg-promise')()


app.get('/', (req, res) => {
    
    res.send("HI")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})