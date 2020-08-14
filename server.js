const axios = require("axios")
const express = require("express");
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const mongoose = require("mongoose");
const passport = require("./passport/setup");
const auth = require("./routes/auth");
const news = require("./routes/news");
const footprint = require("./routes/footprint");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(require("./routes/api/news.js"));
// Add routes, both API and view


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goodearth", { useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
})
.then(console.log("MongoDB connected"))
.catch(err => console.log(err));

// Express Session
app.use(
    session({
      secret: "purplemonkeydishwasher",
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", auth);
app.use("/api/news", news);
app.use("/api/footprint", footprint);
app.get("/", (req, res) => res.send("Howdy; auth res.send"));



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

