// create a route for news api
const router = require("express").Router();
const axios = require("axios");
const { response } = require("express");


router.get("/api/news", (req, res) => {
  const query = req.params.q;
  const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${APIKEY_NEWS}&language=en&from=2020-08-01&sortBy=relevancy,publishedAt&url=true&excludeDomains=seekingalpha.com,freerepublic.com`
    )
    .then((results) => {
        console.log(results.data);
      res.json(results.data);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;
