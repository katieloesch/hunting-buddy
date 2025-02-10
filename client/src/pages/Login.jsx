import React from 'react';
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../styledComponents/RegisterLoginPage';
import { FormBtnSubmit, FormInput, Logo } from '../components';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // const errors = { msg: '' };
  // if (data.password.length < 3) {
  //   errors.msg = 'password too short';
  //   return errors;
  // }

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful!');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg); // make sure custom error is displayed, not axios error
    return error;
    // errors.msg = error?.response?.data?.msg;
    // return errors;
  }
};

const Login = () => {
  const errors = useActionData();
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = { email: 'nthompson@email.com', password: 'nostromo' };

    try {
      await customFetch.post('/auth/login', data);
      toast.success('Welcome to your test drive!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <Form method='post' className='form auth-form'>
        <Logo section='auth' />
        <h4>Login</h4>
        {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <p></p>

        <FormInput type='email' name='email' />
        <FormInput type='password' name='password' />

        <FormBtnSubmit />

        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
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
