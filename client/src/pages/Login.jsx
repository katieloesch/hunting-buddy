import React from 'react';
import { Form, Link, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../styledComponents/RegisterLoginPage';
import { FormInput, Logo } from '../components';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form auth-form'>
        <Logo section='auth' />
        <h4>Login</h4>

        <FormInput
          type='email'
          name='email'
          defaultValue='hquinn@wayneindusties.com'
        />
        <FormInput type='password' name='password' defaultValue='mrjpuddin' />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>

        <button type='button' className='btn btn-block'>
          explore the app
        </button>

        <p>
          Don't have an account yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
