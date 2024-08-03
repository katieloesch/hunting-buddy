import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'netflix', position: 'front-end' },
  { id: nanoid(), company: 'wb', position: 'back-end' },
];

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

/*
 * Action:        INDEX
 * HTTP Method:   GET
 * URI:           /jobs
 * Description:   retrieves a list of all jobs
 * Response:      returns a JSON array of job objects
 */

app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

/*
 * Action:        CREATE
 * HTTP Method:   POST
 * URI:           /jobs
 * Description:   creates new job
 * Response:      returns a JSON object of newly created job
 */

app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({ msg: 'please provide company and position' });
  }

  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
});

// -------------------------------------------

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on PORT ${5100} ...`);
});
