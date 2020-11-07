const Twit = require('twit');
const config = require('../config');

const twit = new Twit(config);

// var params = {
//   q: 'rainbow',
//   count: 20,
// };

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }
// T.post('statuses/retweet/:id', { id: '1324909167635730433' }, function (
//   err,
//   data,
//   response
// ) {
//   console.log(data);
// });

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
