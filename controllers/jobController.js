import Job from '../models/JobModel.js';
import mongoose from 'mongoose';

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(201).json({ job });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: `Invalid ID format provided: ${id}` });
  }

  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({ msg: `No job with ID: ${id}` });
  }

  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: `Invalid ID format provided: ${id}` });
  }

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  if (!updatedJob) {
    return res.status(404).json({ msg: `No job with ID: ${id}` });
  }

  res.status(200).json({ msg: 'job updated', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: `Invalid ID format provided: ${id}` });
  }

  const deletedJob = await Job.findByIdAndDelete(id);

  if (!deletedJob) {
    return res.status(404).json({ msg: `No job with ID: ${id}` });
  }

  res.status(200).json({ msg: 'job deleted', job: deletedJob });
};
