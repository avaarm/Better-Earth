import axios from "axios";

export default {

////////NEWS API////////////////////
getNews: function() {
  const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
  return axios.get("https://newsapi.org/v2/everything?q=environment&apiKey="+APIKEY_NEWS)
}
////////////////////////////////////

// coolClimate: function() {
//   const APIKEY_NEWS = process.env.REACT_APP_APIKEY_NEWS;
//   console.log("https://newsapi.org/v2/everything?q=environment&apiKey="+APIKEY_NEWS)
//   return axios.get("https://newsapi.org/v2/everything?q=environment&apiKey="+APIKEY_NEWS)
// }

};


