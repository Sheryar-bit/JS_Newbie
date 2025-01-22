const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./models/person');
const bcrypt = require('bcryptjs'); 

passport.use(new localStrategy(async (username, password, done) => {
    try {
        const user = await Person.findOne({ username });
        if (!user) return done(null, false, { message: 'Invalid UserName' });

        // Use bcryptjs to compare passwords
        const isPasswordMatch = await user.comparePassword(password)
        if (isPasswordMatch) return done(null, user);
        else return done(null, false, { message: 'Invalid Password' });

    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;
