const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Users = require('../users/users.entity');
const configAuth = require('../../config/config.js');
// console.log(configAuth);
// defining google strategy for passport authentication
console.log('cnfig file is accesible',configAuth.GOOGLE_AUTH);
// passport.serializeUser(function(user, done) {
//        done(null, user.id);
//    });
//
//    // used to deserialize the user
//    passport.deserializeUser(function(id, done) {
//        User.findById(id, function(err, user) {
//            done(err, user);
//        });
//    });
passport.use(new GoogleStrategy({
    clientID: configAuth.GOOGLE_AUTH.clientID,
    clientSecret: configAuth.GOOGLE_AUTH.clientSecret,
    callbackURL: configAuth.GOOGLE_AUTH.callbackURL
},
function(token, refreshToken, profile, done) {
console.log("token by passport",token);
      process.nextTick(function() {
      // checking for the existence of user details in database

        Users.findOne({
            username: profile.emails[0].value
        }, function(err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(null, user);
            }
            // otherwise creating a new record of user details in database
            var newUser = new Users();
            newUser.username = profile.emails[0].value;
            newUser.token = token;
            newUser.name = profile.displayName;
            newUser.email = profile.emails[0].value;
            newUser.profilePic = profile.photos[0].value;
            newUser.save(function(err) {
                if (err)
                    return done(err);
                return done(null, newUser);
            });
            return done(null, false);
        });
    });
}));

module.exports = passport
