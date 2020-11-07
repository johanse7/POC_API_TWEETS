const express = require('express');

const { favoriteTweet, retweetById } = require('../lib/twit');

const routeTweets = (app) => {
  const router = express.Router();
  app.use('/api/tweets', router);

  router.post('/favorite', async (req, res, next) => {
    try {
      const {
        body: { id, like = false },
      } = req;

      console.log(req.body);
      if (!id) {
        res.status(400).json({
          message: 'bad request',
        });

        return;
      }
      const resultLike = await favoriteTweet({ id, like });
      console.log(resultLike);
      res.status(201).json({
        resultLike,
        message: ' like success',
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  });

  router.post('/retweet', async (req, res, next) => {
    try {
      const {
        body: { id, retweet = false },
      } = req;

      console.log(req.body);
      if (!id) {
        res.status(400).json({
          message: 'bad request',
        });

        return;
      }
      const resultLike = await retweetById({ id, retweet });
      console.log(resultLike);
      res.status(201).json({
        resultLike,
        message: ' retweet success',
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  });
};

module.exports = routeTweets;
