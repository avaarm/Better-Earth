const User = require("../models/Users");
const passport = require("../passport/setup");
const axios = require("axios");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const productsController = require("../controllers/productsController");

router.post("/login", (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(400).json({"error": err});
    }
    return res.status(200).json(user);

  })(req, res, next);
});

router.post("/signup", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    console.log(err);
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.username,
        password: hashedPassword,
        name: req.body.name,
      });
      await newUser.save();
      res.json(req.body.name);
    }
  });
});

router.post('/logout', function(req, res){
  req.logout();
  res.status(200).json("logout");
});

router.get("/getnews/:query", (req, res) => {
  const query = req.params.query
  const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
  axios
    .get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${APIKEY_NEWS}&language=en&from=2020-08-01&sortBy=relevancy,publishedAt&pageSize=100&url=true&excludeDomains=seekingalpha.com,freerepublic.com,business2community.com`
      )
      .then(response => {
      res.send(response.data.articles)
      })
      .catch(err => res.send({err}))
})

// Matches with "/api/products"
// router
  .route("/products")
  .get(productsController.findAll)
  .post(productsController.create);

// Matches with "/api/products/:id"
router
  .route("/products:id")
  .get(productsController.findById)
  .put(productsController.update)
  .delete(productsController.remove);

// Matches with "/api/products/:category"
router
  .route("/products/:category")
  .get(productsController.findByCat)
  .put(productsController.update)
  .delete(productsController.remove);

router.get("/getfootprint/:inputType/:input/:income/:householdSize", (req, res) => {
  const inputType = req.params.inputType;
  const input = req.params.input;
  const income = req.params.income;
  const householdSize = req.params.householdSize;
  const APP_KEY = process.env.REACT_APP_COOLCLIMATE_APIKEY;
  const APP_ID = process.env.REACT_APP_COOLCLIMATE_ID;
  axios.get(`https://apis.berkeley.edu/coolclimate/footprint-defaults?app_id=${APP_ID}&app_key=${APP_KEY}&language=en&input_location_mode=${inputType}&input_location=${input}&input_income=${income}&input_size=${householdSize}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => res.send(err));
});

module.exports = router;