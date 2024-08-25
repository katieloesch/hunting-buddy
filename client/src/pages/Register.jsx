import React from 'react';
import { Form, Link, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../styledComponents/RegisterLoginPage';
import { FormInput, Logo } from '../components';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration Successful!');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg); // make sure custom error is displayed, not axios error
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form auth-form'>
        <Logo section='auth' />
        <h4>Register</h4>

        <FormInput
          type='text'
          name='name'
          defaultValue='harley'
          labelText='First Name'
        />
        <FormInput
          type='text'
          name='lastName'
          defaultValue='quinn'
          labelText='Last Name'
        />
        <FormInput type='text' name='location' defaultValue='gotham' />
        <FormInput
          type='email'
          name='email'
          defaultValue='hquinn@wayneindusties.com'
        />
        <FormInput type='password' name='password' defaultValue='mrjpuddin' />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
