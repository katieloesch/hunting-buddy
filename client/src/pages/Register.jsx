import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../styledComponents/RegisterLoginPage';
import { FormInput, Logo } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form auth-form'>
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
        <FormInput type='password' name='password' defaultValue='mrj' />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
