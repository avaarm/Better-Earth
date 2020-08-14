import axios from "axios";

export default {
  ////////NEWS API////////////////////
  // getNews: function (search) {
  //   const query = search;
  //   return axios.get("/api/news", {
  //     params: {
  //       q: query,
  //     },
  //   });
  //   // return axios.get(`/api/news`);
  // },

  ////////CoolClimate API////////////////////
  getFootprint: function(inputType, input, income, householdSize) {
    const query1 = inputType;
    const query2 = input;
    const query3 = income;
    const query4 = householdSize;
    return axios.get("/api/footprint", {
      params: {
        inputType: query1,
        input: query2,
        income: query3,
        householdSize: query4
      }
    });
  },

  // Gets all products
  getProducts: function () {
    return axios.get("/api/products/");
  },
  // Gets the product with the given id
  getProductById: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the products with the given id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a products to the database
  // saveProduct: function (productData) {
  //   return axios.post("/api/products", productData);
  // },
};
