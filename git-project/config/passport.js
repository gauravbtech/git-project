var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {console.log("serializeUser :: user.id "+user.id);
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOneById(id).exec(function (err, user) {console.log("deserializeUser : "+id);
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
    User.findOne({ email: email}).exec(function(err, user) {
          if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Unknown user ' + email }); }
            if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
            return done(null, user);
        });
    }
)); 