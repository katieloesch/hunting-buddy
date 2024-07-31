import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../styledComponents/RegisterLoginPage';
import { FormInput, Logo } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className='form auth-form'>
        <Logo section='auth' />
        <h4>Login</h4>

        <FormInput
          type='email'
          name='email'
          defaultValue='hquinn@wayneindusties.com'
        />
        <FormInput type='password' name='password' defaultValue='mrj' />

        <button type='submit' className='btn btn-block'>
          submit
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
      </form>
    </Wrapper>
  );
};

export default Login;
