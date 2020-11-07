const Twit = require('twit');
const { configTwitter } = require('../config');

const twit = new Twit(configTwitter);

const favoriteTweet = ({ id, like }) => {
  const typeOperation = like ? 'create' : 'destroy';

  return new Promise((resolve, reject) => {
    twit.post(`favorites/${typeOperation}`, { id }, (err, data, response) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const retweetById = ({ id, retweet }) => {
  const typeOperation = retweet ? 'retweet' : 'unretweet';

  return new Promise((resolve, reject) => {
    twit.post(`statuses/${typeOperation}`, { id }, (err, data, response) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

module.exports = {
  favoriteTweet,
  retweetById,
};
