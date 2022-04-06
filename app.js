const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/index').router

const PORT = 3000;

const run_server = (PORT) => {
  // initialise server
  const app = express()

  // middlewares 
  app.use(bodyParser.urlencoded({ extended: false })) // accept json payload
  app.use(bodyParser.json()) // accept json payload
  app.use(cors({
      credentials: true, 
      origin: [
          'http://127.0.0.1',
      ]
  })); // allow CORS

  app.use('/', router);

  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  })
}

  run_server(PORT);


