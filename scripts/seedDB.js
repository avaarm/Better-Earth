const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/goodearth"
);

const productSeed = [
  {
    category: "Kitchen",
    name: "Dish soap",
    thumbnail: "",
    href: "https://www.blueland.com/collections/all/products/dish-soap-starter-set?gclid=CjwKCAjwjqT5BRAPEiwAJlBuBdPAOdyXK8qu299x3cbhg0dgars-ti0ZV1Q0dxTPt-9gGrSX3RxkKBoCIOQQAvD_BwE",
    summary: "Blueland ships a reusable bottle and tablets. All you have to do is fill your bottle with water. Drop in a cleaning or soap tablet and you are good to go. ",
    title: "Blueland"
  },
  {
    category: "Clothing",
    name: "",
    thumbnail: "",
    href: "https://www.wearethought.com/?utm_source=Affiliate&utm_medium=LinkShare&utm_campaign=QFGLnEolOWg&utm_content=15&utm_term=UKNetwork&ranSiteID=QFGLnEolOWg-11xssrDxvPBTHP9fHEGLLg&siteID=QFGLnEolOWg-11xssrDxvPBTHP9fHEGLLg",
    summary: "",
    title: ""
  },
  {
    category: "Bathroom",
    name: "",
    thumbnail: "",
    href: "https://www.blueland.com/pages/how-it-works",
    summary: "",
    title: ""
  },
  {
    category: "Shoes",
    name: "",
    thumbnail: "",
    href: "",
    summary: "",
    title: " "
  },
  {
    category: "General House",
    name: "",
    thumbnail: "",
    href: "",
    summary: "",
    title: ""
  },
  {
    category: "Accessories",
    name: "",
    thumbnail: "",
    href: "",
    summary: "",
    title: ""
  },
  {
    category: "Storage",
    name: "",
    thumbnail: "",
    href:"",
    summary: "",
    title: ""
  },
  {
    category: "Outdoor Gear",
    name: "",
    thumbnail: "",
    href: "",
    summary: "",
    title: ""
  },
  {
    category: "Dryer Balls",
    name: "",
    thumbnail: "",
    href: "",
    summary: "",
    title: ""
  },
  {
    category: "Produce Bags",
    name: "",
    thumbnail: "",
    href: "",
    summary: "",
    title: ""
  },
  {
    category: "Food Storage Bags",
    name: "",
    thumbnail: "",
    href: "",
    summary: "",
    title: ""
  }
];

db.Product.deleteMany({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
