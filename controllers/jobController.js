import Job from '../models/JobModel.js';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';

import { NotFoundError } from '../errors/customErrors.js';

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFoundError(`Invalid ID format provided: ${id}`);
  }

  const job = await Job.findById(id);

  if (!job) {
    throw new NotFoundError(`No job with ID: ${id}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFoundError(`Invalid ID format provided: ${id}`);
  }

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  if (!updatedJob) {
    throw new NotFoundError(`No job with ID: ${id}`);
  }

  res.status(StatusCodes.OK).json({ msg: 'job updated', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFoundError(`Invalid ID format provided: ${id}`);
  }

  const deletedJob = await Job.findByIdAndDelete(id);

  if (!deletedJob) {
    throw new NotFoundError(`No job with ID: ${id}`);
  }

  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: deletedJob });
};
