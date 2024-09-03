const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.use(express.static('public'))

// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
//   }
  
//   app.use(myLogger)

app.use((req, res, next) => {
  fs.appendFileSync("log.txt", `Date: ${new Date()}, Method: ${req.method}, ip ${req.ip}, Original URL: ${req.originalUrl}\n` )
    console.log("Date: ", Date.now(),"Method: ", req.method,"ip",req.ip, "Original URL: ", req.originalUrl)
    next()  
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})