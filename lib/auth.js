const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const UserModel = require('../model/user');

const fields = { usernameField: 'email', passwordField: 'password' };
passport.use('signup', new LocalStrategy(fields, async (email, password, cb) => {
  try {
    const user = await UserModel.create({ email, password });
    return cb(null, user);
  } catch (error) {
    return cb(error);
  }
}));

passport.use('login', new LocalStrategy(fields, async (email, password, cd) => {
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return cd(null, false, { message: 'User not found' });
    }

    const validate = await user.isValidPassword(password);

    if (!validate) {
      return cd(null, false, { message: 'Wrong Password' });
    }

    return cd(null, user, { message: 'Logged in Successfully' });
  } catch (error) {
    return cd(error);
  }
}));

const opts = { secretOrKey: 'TOP_SECRET', jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('authorization') };
passport.use(new JWTstrategy(opts, async (token, cd) => {
  try {
    return cd(null, token.user);
  } catch (error) {
    return cd(error);
  }
}));
