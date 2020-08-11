import axios from "axios";

export default {

  ////////NEWS API////////////////////
  getNews: function(search) {
    const query = search;
    const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
    // return axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=`+APIKEY_NEWS)
    return axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${APIKEY_NEWS}&language=en&from=2020-08-01&sortBy=publishedAt&url=true`)
  },

  ////////////coolClimate API//////////////////////
  getFootprint: function(inputType, input, income, householdSize) {
    const APP_KEY = process.env.REACT_APP_COOLCLIMATE_APIKEY;
    const APP_ID = process.env.REACT_APP_COOLCLIMATE_ID;
    console.log(APP_KEY + " " + APP_ID);
    return axios.get(`https://apis.berkeley.edu/coolclimate/footprint-defaults?app_id=${APP_ID}&app_key=${APP_KEY}&language=en&input_location_mode=${inputType}&input_location=${input}&input_income=${income}&input_size=${householdSize}`);
  }

};


