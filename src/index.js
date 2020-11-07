const express = require('express');
const cors = require('cors');
const routeTweets = require('./routes/');

const app = express();
app.use(cors());
app.use(express.json());

///Routes Twitter api
routeTweets(app);

app.listen(300, (err) => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:300}`);
});
