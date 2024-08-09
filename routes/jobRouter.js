import { Router } from 'express';
const router = Router();

import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJobById).patch(updateJob).delete(deleteJob);

export default router;
