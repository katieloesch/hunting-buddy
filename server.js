import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import morgan from 'morgan';

// routers
import jobRouter from './routes/jobRouter.js';

// import { nanoid } from 'nanoid';

// let jobs = [
//   { id: nanoid(), company: 'netflix', position: 'front-end' },
//   { id: nanoid(), company: 'wb', position: 'back-end' },
// ];

//add middleware to all routes with app.use()
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

app.use('/api/v1/jobs', jobRouter);

/*
 * Action:        INDEX
 * HTTP Method:   GET
 * URI:           /api/v1/jobs
 * Description:   retrieves a list of all jobs
 * Response:      returns a JSON array of job objects
 */

// app.get('/api/v1/jobs');

/*
 * Action:        CREATE
 * HTTP Method:   POST
 * URI:           /api/v1/jobs
 * Description:   creates new job
 * Response:      returns a JSON object of newly created job
 */

// app.post('/api/v1/jobs');

/*
 * Action:        SHOW
 * HTTP Method:   GET
 * URI:           /api/v1/jobs/mdivATfPJQ
 * Description:   retrieve a single job of id: mdivATfPJQ
 * Response:      returns a JSON object of job with id mdivATfPJQ
 */

// app.get('/api/v1/jobs/:id');

/*
 * Action:        UPDATE
 * HTTP Method:   PATCH
 * URI:           /api/v1/jobs/mdivATfPJQ
 * Description:   edits a single job of id: mdivATfPJQ
 * Response:      returns a JSON object of updated job with id mdivATfPJQ
 */

// app.patch('/api/v1/jobs/:id');

/*
 * Action:        DELETE
 * HTTP Method:   DELETE
 * URI:           /api/v1/jobs/mdivATfPJQ
 * Description:   removes a single job of id: mdivATfPJQ
 * Response:      returns a JSON object of deleted job with id mdivATfPJQ
 */

// app.delete('/api/v1/jobs/:id');

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: 'something went wrong...' });
});

// ---------------------------------------------------------------

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
