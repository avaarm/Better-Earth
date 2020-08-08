const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());