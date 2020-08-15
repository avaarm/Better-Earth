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
    category: "Kitchen",
    productName: "Bamboo Towel",
    thumbnail: "",
    href: "https://www.amazon.com/dp/B00KWBSDYC?ots=1&slotNum=1&imprToken=4cb9f838-75a7-bd45-83f",
    summary: "One roll replaces 6 months of towels! ",
    title: "Bamboo Towel"
  },
  {
    category: "Kitchen",
    productName: "Misto Brushed Aluminum Oil Sprayer",
    thumbnail: "",
    href: "https://www.amazon.com/dp/B00004SPZV?ots=1&slotNum=36&imprToken=aeb9f83c-7288-5691-1a7",
    summary: "Misto is a reusable oil spray and mister bottle that gives you the convenience and health benefits of typical aerosol sprayers but in a more healthy, economical and environmental way. ",
    title: "Misto Brushed Aluminum Oil Sprayer"
  },
  {
    category: "Clothing",
    productName: "Face Mask",
    thumbnail: "",
    href: "https://www.wearethought.com/face-masks/",
    summary: "Thought offers easy-to-wear clothes that use natural fabrics; like bamboo, hemp, and organic cotton. ",
    title: "Face Mask"
  },
  {
    category: "Clothing",
    productName: "Socks",
    thumbnail: "",
    href: "https://www.wearethought.com/sustainable-socks/patterns/",
    summary: "These fun, patterned bamboo socks are made from soft, breathable, sustainable fibres so you're sure to have happy feet all season long. Aaaah... ",
    title: "Socks"
  },
  {
    category: "Clothing",
    productName: "Lounge Wear",
    thumbnail: "",
    href: "https://www.wearethought.com/loungewear-intro/",
    summary: "The Comfiest, Kindest Yarns - 100% Natural & Sustainable",
    title: "Lounge Wear"
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
    category: "Bathroom",
    productName: "Bite Toothpaste",
    thumbnail: "",
    href: "https://bitetoothpastebits.com/",
    summary: "Ending plastic waste, one healthy smile at a time. ",
    title: "Bite Toothpaste"
  },
  {
    category: "Bathroom",
    productName: "Brush with Bamboo",
    thumbnail: "",
    href: "https://www.brushwithbamboo.com/",
    summary: "We manufacture the World’s First and Only Plant-based Bamboo Toothbrushes. We use USDA certified 100% Biobased Bristles, a Bamboo Handle, and Compostable Packaging. Over 5 Billion plastic toothbrushes are produced every year worldwide. Quit plastic, Brush with Bamboo. ",
    title: "Brush with Bamboo"
  },
  {
    category: "Shoes",
    productName: "All Birds",
    thumbnail: "",
    href: "https://www.allbirds.com/pages/sustainability",
    summary: "The carbon footprints of All Birds shoes are a little more than half of the footprint of a standard sneaker.",
    title: "All Birds"
  },
  {
    category: "Shoes",
    productName: "Nothing New",
    thumbnail: "",
    href: "https://nothingnew.com/?gclid=Cj0KCQjw7Nj5BRCZARIsABwxDKLexF9O7PF6LLf9hRRlNMho0FMJZbhsyx0zH3JWBcECpJgwdnxDAIgaAmMqEALw_wcB",
    summary: "Proving once and for all that eco-friendly can also be attractive. ",
    title: "Nothing New"
  },
  {
    category: "Shoes",
    productName: "Rothy's",
    thumbnail: "",
    href: "https://rothys.com/",
    summary: "We’re all about transforming eco-friendly materials into stylish, wear-everywhere products to love.",
    title: "Rothy's"
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
    category: "General House",
    productName: "Bamboo toilet paper",
    thumbnail: "",
    href: "https://reelpaper.com/?utm_source=Adwords&utm_medium=Paid&utm_campaign=reelbranded&gclid=Cj0KCQjw7Nj5BRCZARIsABwxDKL4rTTAxa2uwdq8dXZPHzLXmn-Ia-ohlmLpD-kivXCzUV4As3mOrgAaAlJ7EALw_wcB",
    summary: "Life changing toilet paper Bamboo toilet paper that does good and feels good. Delivered to your door",
    title: "Bamboo toilet paper"
  },
  {
    category: "General House",
    productName: "Organic bedding",
    thumbnail: "",
    href: "https://www.ettitude.com/collections/sale?gclid=Cj0KCQjw7Nj5BRCZARIsABwxDKK0LMHofyaajJp4XNInmYcVMz4ZUYJ3MeROjqhpjkBOCKoGvwuaSscaAmYqEALw_wcB",
    summary: "Always eco-forward and made with 100% organic bamboo. Say hello (and goodnight) to CleanBamboo™ savings—all the better for you and our planet.",
    title: "Organic bedding"
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
    category: "Accessories",
    productName: "Toadandco",
    thumbnail: "",
    href: "https://www.toadandco.com/mens/clothing/accessories",
    summary: "Like good friends, good accessories stick by your side and are there when it matters.",
    title: "Toadandco"
  },
  {
    category: "Accessories",
    productName: "Soko",
    thumbnail: "",
    href: "https://shopsoko.com/?utm_source=RAN&utm_medium=affiliates&utm_campaign=DkqcY%2Fd68c0&utm_content=1&ranMID=44410&ranEAID=DkqcY%2Fd68c0&ranSiteID=DkqcY_d68c0-n6X321RSAGaepMnm0f.dpg",
    summary: "We are a women-led, people-first ethical jewelry brand and tech-powered manufacturing platform built to connect artisans in Kenya with the global market.",
    title: "Soko"
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
    category: "Storage",
    productName: "Container Store",
    thumbnail: "",
    href:"https://www.containerstore.com/s/storage/Eco-Friendly/1w",
    summary: " At The Container Store, we're here with beautiful, practical storage ideas to help you organize it, protect it or stow it away. ",
    title: "Container Store"
  },
  {
    category: "Storage",
    productName: "Organic Cotton Rope Basket",
    thumbnail: "",
    href:"https://www.amazon.com/WHITECLOUD-Organic-Organizer-Handles-Eco-Friendly/dp/B07BJ9LNCG?ref_=fsclp_pl_dp_9",
    summary: " 100% ORGANIC Cotton Woven Basket // No Harmful Chemicals or Dyes. Other products may claim to be'eco-friendly' or 'natural', but only organic cotton is true to that label! ",
    title: "Organic Cotton Rope Basket "
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
    category: "Outdoor Gear",
    productName: "Cotopaxi",
    thumbnail: "",
    href: "https://www.cotopaxi.com/collections/del-dia",
    summary: "One-of-a-kind. 100% repurposed fabric. Uniquely yours. ",
    title: "Cotopaxi"
  },
  {
    category: "Outdoor Gear",
    productName: "Toad & Co",
    thumbnail: "",
    href: "https://www.toadandco.com/?utm_source=google&utm_medium=cpc&utm_campaign=Search:_Brand_-_Trademark&utm_adgroup=Toad&Co&gclid=Cj0KCQjw7Nj5BRCZARIsABwxDKKVeeXJ8Ld3fa-GYawiJJDTv7kKJv_uyWTJrYCdTUIrSZrIBAwxamoaAk1xEALw_wcB",
    summary: "TThe apparel industry is the fourth largest polluter of air and water on Earth. The solution? Go sustainable, or go nude™. Minimizing our environmental impact and helping clean up the apparel industry is an integral part of our business ethos. ",
    title: "Toad & Co"
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
    category: "Dryer Balls",
    productName: "Feeling Fluffy",
    thumbnail: "",
    href: "https://www.amazon.com/gp/product/B00UNNNTMA/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00UNNNTMA&linkCode=as2&tag=sustaisunday-20&linkId=4ZHVD5TQEHMMYGUQ",
    summary: "Anti-Static Cling, Reduce Drying Time, Reusable Over 1,000 Loads, Save Money - 100% Natural Organic Eco Laundry Balls Fabric Softener",
    title: "Feeling Fluffy"
  },
  {
    category: "Dryer Balls",
    productName: "Parachute Dryer Balls",
    thumbnail: "",
    href: "https://www.parachutehome.com/products/wool-dryer-ball?affiliateID=120661&clickId=3239969191&utm_campaign=affiliate&utm_medium=referral&utm_source=pepperjam",
    summary: "Keep your laundry fresh with this natural alternative to dryer sheets. Our Wool Dryer Balls soften fabrics and decrease drying time by up to 50%. ",
    title: "Parachute Dryer Balls"
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
    category: "Produce Bags",
    productName: "Rezip 3-Piece Stand-Up Leakproof Reusable Storage Bag Kit",
    thumbnail: "",
    href: "https://www.amazon.com/dp/B01KRFUFWU?ots=1&slotNum=28&imprToken=4cb9f838-75a7-bd45-83f",
    summary: "One rezip bag replaces up to 300 disposable bags",
    title: "Rezip 3-Piece Stand-Up Leakproof Reusable Storage Bag Kit"
  },
  {
    category: "Produce Bags",
    productName: "Vejibag - Reusable Vegetable Crisper Bag",
    thumbnail: "",
    href: "https://www.amazon.com/dp/B00CZDKZE6?ots=1&slotNum=30&imprToken=4cb9f838-75a7-bd45-83f",
    summary: "Vejibag is the healthy, eco-friendly solution for storing and preserving vegetables in the refrigerator. ",
    title: "Vejibag - Reusable Vegetable Crisper Bag"
  },
  {
    category: "Food Storage Bags",
    productName: "Silicone Stasher Bags",
    thumbnail: "",
    href: "https://earthhero.com/products/travel/stasher-reusable-silicone-stasher-bags-assorted-4pk/",
    summary: "Tired of tossing wasteful plastic baggies every day? Switch to a reusable, washable, and sustainable alternative with Stasher’s Silicone Bags. ",
    title: "Earth Hero"
  },
  {
    category: "Food Storage Bags",
    productName: "100% Compostable Trash Bags, 13 Gallon",
    thumbnail: "",
    href: "https://www.amazon.com/dp/B013XRVNJS?ots=1&slotNum=20&imprToken=4cb9f838-75a7-bd45-83f",
    summary: "UNNI Compostable Bags are made from plant starches and contain NO polyethylene. Bags are durable, nontoxic, easy to use and great for the environment ",
    title: "100% Compostable Trash Bags, 13 Gallon"
  },
  {
    category: "Food Storage Bags",
    productName: "Frego Award-Winning Plastic-Free Glass and Silicone Food Container",
    thumbnail: "",
    href: "https://www.amazon.com/dp/B0083JZY7E?ots=1&slotNum=23&imprToken=4cb9f838-75a7-bd45-83f",
    summary: "Confidently consume foods stored in Frego Food Containers knowing their high quality materials do not contain BPA, PVC, polystyrene, lead or plastics. ",
    title: "Frego Award-Winning Plastic-Free Glass and Silicone Food Container"
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
