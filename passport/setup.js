const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const db = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});



// Local Strategy
//////////// VERSION 1 ///////////////////////
// passport.use(new LocalStrategy(
//         { usernameField: "email" }, 
//         (email, password, done) => {
//         // Match User
//         User.findOne({ email: email })
//             .then(user => {
//                 // Create new User
//                 if (!user) {
//                     const newUser = new User({ email, password });
//                     // Hash password before saving in database
//                     bcrypt.genSalt(10, (err, salt) => {
//                         bcrypt.hash(newUser.password, salt, (err, hash) => {
//                             if (err) throw err;
//                             newUser.password = hash;
//                             newUser
//                                 .save()
//                                 .then(user => {
//                                     return done(null, user);
//                                 })
//                                 .catch(err => {
//                                     return done(null, false, { message: err });
//                                 });
//                         });
//                     });
//                     // Return other user
//                 } else {
//                     // Match password
//                     bcrypt.compare(password, user.password, (err, isMatch) => {
//                         if (err) throw err;

//                         if (isMatch) {
//                             return done(null, user);
//                         } else {
//                             return done(null, false, { message: "Wrong password" });
//                         }
//                     });
//                 }
//             })
//             .catch(err => {
//                 return done(null, false, { message: err });
//             });
//     }),
//////////// VERSION 1 - END ///////////////////////

// Local Strategy
//////////// VERSION 2 ///////////////////////
passport.use(new LocalStrategy(
    // {
    // usernameField: "email"
    // },
    function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        if (err) throw err;
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user.password, (err,result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done (null, false,{message:"incorrect password"});
            }
          })
        // if (!user.validPassword(password)) {
        //   return done(null, false, { message: 'Incorrect password.' });
        // }
        // return done(null, user);
      });
    }
  ));

  passport.serializeUser((user, cb) => {
    console.log("serialize user", user);
    cb(null, user.id);
  })
  
  passport.deserializeUser((id, cb) => {
    User.findOne({_id: id}, (err, user) => {
    console.log("deserialize user", user);
    cb(err, obj);
  })
  })
//////////// VERSION END ///////////////////////


// );

module.exports = passport;