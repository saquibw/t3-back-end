const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

var db = '';


app.post('/api/saveData', (req, res) => {
  
  db += '\n' + req.body.status;
  console.log(db);
  res.send(db);
})

// app.get('/api/getData', () => {

// })

app.listen(port, () => console.log(`Tic-tac-toe app listening on port ${port}!`))