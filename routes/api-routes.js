const User = require("../models/Users");
const passport = require("../passport/setup");
const axios = require("axios");
const router = require("express").Router();
const bcrypt = require("bcryptjs");


    router.post("/api/login", passport.authenticate("local"), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          username: req.user.username,
          id: req.user.id
        });
      });
    
      // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
      // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
      // otherwise send back an error
      router.post('/login', passport.authenticate('local', 
        (req, res) => {
            console.log("this is the server side response: " +res)
            // res.send({
            //     name: res.name
            // })

            // res.json({
            // name: req.users.name,
            // id: req.users._id,
            // })
            // res.send("Logged in?")
        })
      )


      router.post("/signup", (req, res) => {
        User.findOne({ username: req.body.username }, async (err, doc) => {
          if (err) throw err;
          console.log(err);
          if (doc) res.send("User Already Exists");
          if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
      
            const newUser = new User({
              email: req.body.username,
              password: hashedPassword,
              name: req.body.name,
            });
            await newUser.save();
            res.send("User Created");
          }
        });
      });


module.exports = router;