const router = require("express").Router();
const axios = require("axios");

// API Routes
router.get("/getnews/:query", (req, res) => {
    const query = req.params.query
    const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
    axios
      .get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${APIKEY_NEWS}&language=en&from=2020-08-01&sortBy=relevancy,publishedAt&url=true&excludeDomains=seekingalpha.com,freerepublic.com`
        )
        .then(response => {
        res.send(response.data.articles)
        })
        .catch(err => res.send({err}))
})

module.exports = router;
