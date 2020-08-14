const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models");

// From boilerplate: can only use for email and address
router.post("/register_login", (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return (
                res.status(200).json({ success: `logged in ${user.id}` })
            
            );
        });
    })(req, res, next);
});

// trying out register only
router.post("/newregister", (req, res, next) => {
    const name = req.body.name
    console.log(name)
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            // after authentication, entering name to user in
            // db.User.updateOne({_id: user.id}, { $set: {name: name}},
            //     function(err, res) {
            //         if (err) throw err;
            //         console.log("user name should be in database");
            //     })
            return (
                // res.status(200).json({ success: `logged in ${user.id}` })
                res.status(200).json({ name: name })
            
            );
        });
    })(req, res, next);
});


router.get('/logout', function(req, res){
    req.session.destroy();
  });

module.exports = router;