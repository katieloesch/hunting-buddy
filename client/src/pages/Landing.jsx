import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../styledComponents/LandingPage.js';
import txt from '../assets/text/landingText.js';
import { images } from '../assets/images';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <Logo section='landing' />

          <h1>Your Personal Job Application Tracker</h1>

          <div className='description'>
            {txt.description.map((paragraph, index) => (
              <p key={`landing-description-${index}`}>{paragraph}</p>
            ))}
          </div>

          <Link to='register' className='btn register-link'>
            Register
          </Link>
          <Link to='login' className='btn login-link'>
            Login / Demo User
          </Link>
        </div>

        <img
          src={images.landingMain.src}
          alt={images.landingMain.alt}
          title={images.landingMain.title}
          className='img main-img'
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
