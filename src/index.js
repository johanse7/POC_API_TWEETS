const express = require('express');
const cors = require('cors');
const routeTweets = require('./routes/');
const { config } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

///Routes Twitter api
routeTweets(app);

app.listen(config.port, (err) => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}}`);
});
