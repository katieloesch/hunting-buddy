import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

import Job from '../models/JobModel.js';

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: 'job updated', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const deletedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: deletedJob });
};

export const showStats = async (req, res) => {
  // hard coded temporary dummy values
  const defaultStats = {
    pending: 21,
    interview: 13,
    declined: 11,
  };

  let monthlyApplications = [
    { date: 'May 23', count: 17 },
    { date: 'June 23', count: 17 },
    { date: 'Jul 23', count: 17 },
  ];

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
