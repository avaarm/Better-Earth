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
// router.post("/newregister",function(req,res){
//     console.log("inside authregister");
//     console.log(req.body);
//     db.Users.create(req.body).then(function(err){
//         if (err) throw err
//         res.json(true)
//     })
// })
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;