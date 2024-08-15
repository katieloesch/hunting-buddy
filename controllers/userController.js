import { StatusCodes } from 'http-status-codes';

import User from '../models/UserModel.js';
import Job from '../models/JobModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  // user variable contains hashed pw, use instance method to make sure pw is removed and not sent to frontend
  const userNoPw = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userNoPw });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await User.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: 'update user...' });
};
