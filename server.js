const axios = require("axios")

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactproductlist");
// Make a route for coolClimate 

//app.get('/test', (req, res) => {})

// app.get("/test", async(req, res) => {
//   try{
//     const baseURL = 'apis.berkeley.edu/coolclimate'
//     const APIKEY = process.env.CoolClimate_APIKEY
//     const ID = process.env.CoolClimate_ID
//     const options = {
//       headers: {
//         accept: 'application/json',
//         app_id: `${ID}`,
//         app_key: `${APIKEY}`
//       }
//     }
//     const results = await axios.get(`https://${baseURL}/footprint-defaults?input_location_mode=1&input_location=98466&input_income=1&input_size=1`, options)
//     console.log(results);
//     res.json(results)
//   } catch(error){
//     console.log('ERROR on /api/test -->', error)
//   }
// })



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

