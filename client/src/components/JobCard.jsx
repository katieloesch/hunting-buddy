import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import Wrapper from '../styledComponents/JobCard';
import JobInfo from './JobInfo';

day.extend(advancedFormat);

const JobCard = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const formattedDate = day(createdAt).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>

      <div className='content'>
        <div className='content-center'>
          <JobInfo
            icon={
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: '1.04em' }}
              />
            }
            txt={jobLocation}
          />
          <JobInfo icon={<FaCalendarAlt />} txt={formattedDate} />
          <JobInfo icon={<FaBriefcase />} txt={jobType} />

          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>

        <footer className='actions'>
          <Link to={`../edit-job/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
          <Form>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default JobCard;
