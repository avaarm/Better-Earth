const router = require("express").Router();
const axios = require("axios");

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
