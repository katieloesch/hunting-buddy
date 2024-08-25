import React from 'react';
import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../styledComponents/DashboardFormPage';
import { FormInput } from '../components';
import customFetch from '../utils/customFetch';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';

const AddJob = () => {
  const { user } = useOutletContext(); // variable provided in DashboardLayout (ln 65)
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add Job</h4>

        <div className='form-center'>
          <FormInput type='text' name='position' />
          <FormInput type='text' name='company' />
          <FormInput
            type='text'
            labelText='location'
            name='jobLocation'
            defaultValue={user.location}
          />

          <button
            type='submit'
            className='btn btn-block form-btn'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
