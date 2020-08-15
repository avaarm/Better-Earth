const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/goodearth"
);

const productSeed = [
  {
    category: "Kitchen",
    productName: "Dish soap",
    thumbnail: "",
    href: "https://www.blueland.com/collections/all/products/dish-soap-starter-set?gclid=CjwKCAjwjqT5BRAPEiwAJlBuBdPAOdyXK8qu299x3cbhg0dgars-ti0ZV1Q0dxTPt-9gGrSX3RxkKBoCIOQQAvD_BwE",
    summary: "Blueland ships a reusable bottle and tablets. All you have to do is fill your bottle with water. Drop in a cleaning or soap tablet and you are good to go. ",
    title: "Blueland"
  },
  {
    category: "Clothing",
    productName: "Face Mask",
    thumbnail: "",
    href: "https://www.wearethought.com/face-masks/",
    summary: "Thought offers easy-to-wear clothes that use natural fabrics; like bamboo, hemp, and organic cotton. ",
    title: "Thought"
  },
  {
    category: "Bathroom",
    productName: "The Clean Suite",
    thumbnail: "",
    href: "https://www.blueland.com/products/the-clean-suite",
    summary: "Overhaul your cleaning routine to start cutting out single-use plastic from your home. Includes 7 reusable containers and non-toxic refills. ",
    title: "Blueland"
  },
  {
    category: "Shoes",
    productName: "Tree Dashers",
    thumbnail: "",
    href: "https://www.allbirds.com/pages/sustainability",
    summary: "The carbon footprints of All Birds shoes are a little more than half of the footprint of a standard sneaker.",
    title: "All Birds"
  },
  {
    category: "General House",
    productName: "Dr Bronner's Pur Castile Peppermind Liquid Soap",
    thumbnail: "",
    href: "https://shop.drbronner.com/pure-castile-liquid-soap#scent=Peppermint",
    summary: "The most increcible and sustainable all-purpose soap that you will ever experience",
    title: "Dr Bronner's"
  },
  {
    category: "Accessories",
    productName: "Upcycled Leather Scrunchie",
    thumbnail: "",
    href: "https://www.shopsustainableaccessories.com/product-page/upcycled-leather-scrunchie",
    summary: "Scrunchies, headbands and hair scarves are made from upcycled secondhand clothing that is unable to be worn but has potential to be remade into something beautiful.",
    title: "Shop Sustainable Accessories"
  },
  {
    category: "Storage",
    productName: "Way Basics",
    thumbnail: "",
    href:"https://www.waybasics.com/",
    summary: " Our furniture is made from our patented zBoard material, which takes nothing from the environment, is over 60% lighter than wood-engineered boards, and is just as strong. Non-toxic, formaldehyde-free and VOC-free Way Basics is safe for your home and our earth. ",
    title: "Way Basics"
  },
  {
    category: "Outdoor Gear",
    productName: "Picture Organic Clothing",
    thumbnail: "",
    href: "https://www.picture-organic-clothing.com/sustainability/index-en.html",
    summary: "The traditional way to make a snow jacket requires petroleum extraction. However, other solutions do exist. Our products are made from materials that are organic, recycled, bio-sourced, reused, and animal-based, with a PFC free water repellent treatment. ",
    title: "Picture Organic Clothing"
  },
  {
    category: "Dryer Balls",
    productName: "Flock of Friends",
    thumbnail: "",
    href: "https://www.friendsheepwool.com/products/eco-dryer-balls-flock-of-friends#:~:text=Friendsheep%20Eco%20Dryer%20Balls%20are,by%20up%20to%2040%25!",
    summary: "Friendsheep Eco Dryer Balls are an all-natural and organic fabric softener handmade from 100% premium New Zealand wool.  They replace single-use chemically treated plastic dryer sheets and fabric softeners that contain harmful chemicals, are fully reusable for over 1000 loads, and reduce drying time by up to 40%. ",
    title: "Friendsheepwool"
  },
  {
    category: "Produce Bags",
    productName: "Veggie Bags",
    thumbnail: "",
    href: "https://www.naturalhomebrands.com/products/veggie-bags-5-pack-kitchen-accessories-1?variant=6946708165",
    summary: "These veggie bags are a great way to cut down plastic bag use while shopping for all your fruits and veggies! When kept in sealed bags, fruits and veggies break down quicker. These bags are breathable, so they are able to absorb moisture and air, keeping your produce fresher, longer. ",
    title: "Natural Home Brands"
  },
  {
    category: "Food Storage Bags",
    productName: "Silicone Stasher Bags",
    thumbnail: "",
    href: "https://earthhero.com/products/travel/stasher-reusable-silicone-stasher-bags-assorted-4pk/",
    summary: "Tired of tossing wasteful plastic baggies every day? Switch to a reusable, washable, and sustainable alternative with Stasher’s Silicone Bags. ",
    title: "Earth Hero"
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
