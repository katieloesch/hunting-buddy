import React from 'react';
import { Form, Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../styledComponents/RegisterLoginPage';
import { FormBtnSubmit, FormInput, Logo } from '../components';
import customFetch from '../utils/customFetch';

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   try {
//     await customFetch.post('/auth/register', data);
//     toast.success('Registration Successful!');
//     return redirect('/login');
//   } catch (error) {
//     toast.error(error?.response?.data?.msg); // make sure custom error is displayed, not axios error
//     return error;
//   }
// };

// fixing npm run build issue

export const action = ({ request }) => {
  return request
    .formData()
    .then((formData) => {
      const data = Object.fromEntries(formData);
      return customFetch.post('/auth/register', data);
    })
    .then(() => {
      toast.success('Registration Successful!');
      return redirect('/login');
    })
    .catch((error) => {
      toast.error(error?.response?.data?.msg);
      return error;
    });
};

const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form auth-form'>
        <Logo section='auth' />
        <h4>Register</h4>

        <FormInput type='text' name='name' labelText='First Name' />
        <FormInput type='text' name='lastName' labelText='Last Name' />
        <FormInput type='text' name='location' />
        <FormInput type='email' name='email' />
        <FormInput type='password' name='password' />

        <FormBtnSubmit />

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
