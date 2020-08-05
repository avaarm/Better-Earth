import axios from "axios";

export default {

////////NEWS API////////////////////
getNews: function() {
  const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
  return axios.get("https://newsapi.org/v2/everything?q=environment&apiKey="+APIKEY_NEWS)
},

//////////////coolClimate API//////////////////////
// coolClimate: function() {
//   const baseURL = process.env.REACT_APP_APIKEY_NEWS;
//   const APIKEY = process.env.CoolClimate_APIKEY
//   const ID = process.env.CoolClimate_ID
//   console.log("")
//   return axios.get("")
// }

};


