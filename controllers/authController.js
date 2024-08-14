import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { comparePasswords, hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
  // 1) if user is the first one created in collection, role should be set to 'admin'
  //    otherwise, role should be set to 'user'

  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  // 2) salt/hash password
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  // 3) create new user in db with hashed password + send response (201)
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  // 1) check if user with input email exists in db
  // 2) if user exists, check if password is correct

  const isValidUser =
    user && (await comparePasswords(req.body.password, user.password));

  if (!isValidUser) {
    // if user doesn't exist in db or passwords don't match -> 401
    throw new UnauthenticatedError('invalid credentials');
  }

  // user exists in db AND passwords match ->
  //   res.status(StatusCodes.ACCEPTED).json({ user });

  const token = createJWT({
    userId: user._id,
    role: user.role,
  });

  res.send({ token });
};
