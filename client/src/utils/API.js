import axios from "axios";

export default {
  // Gets all products
  getProducts: function () {
    return axios.get("/api/products/");
  },
    // Gets products by category
    getProductsByCategory: function (category) {
      return axios.get("/api/products/" + category);
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
