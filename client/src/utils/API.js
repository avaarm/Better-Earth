import axios from "axios";
require("dotenv").config();

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  ////////NEWS API////////////////////
  getNews: function() {
    apiKeyOTM = process.env.APIKEY_NEWS
    return axios.get("https://newsapi.org/v2/everything?q=environment&apiKey=46e0195723054e84ab1a9cd0773932ae")
    .then(response =>
      console.log(response))
  }


  ////////////////////////////////////
};

