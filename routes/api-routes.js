const User = require("../models/Users");
const passport = require("../passport/setup");
const axios = require("axios");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const productsController = require("../controllers/productsController");

// router.post('/login', passport.authenticate('local', 
//   (req, res, next) => {
//       console.log("this is the server side response: " +res)

//   })(req, res, next));

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

router.get('/logout', function(req, res){
  req.logout();
  res.json("logout")
});

router.get("/getnews/:query", (req, res) => {
  const query = req.params.query
  const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
  axios
    .get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${APIKEY_NEWS}&language=en&from=2020-08-01&sortBy=relevancy,publishedAt&url=true&excludeDomains=seekingalpha.com,freerepublic.com,business2community.com`
      )
      .then(response => {
      res.send(response.data.articles)
      })
      .catch(err => res.send({err}))
})

// Matches with "/api/products"
// router
  // .route("/")
  // .get(productsController.findAll)
  // .post(productsController.create);

router.get("/products", (req, res) => {
  productsController.findAll
})

router.post("/products", (req, res) => {
  productsController.create
})

// Matches with "/api/products/:id"
// router
  // .route("/:id")
  // .get(productsController.findById)
  // .put(productsController.update)
  // .delete(productsController.remove);

router.get("/products/:id", (req, res) => {
  productsController.findById
})

router.put("/products/:id", (req, res) => {
  productsController.update
})

router.delete("/products/:id", (req, res) => {
  productsController.remove
})

  

module.exports = router;