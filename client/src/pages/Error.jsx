import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

import Wrapper from '../styledComponents/ErrorPage';
import txt from '../assets/text/notFoundText';
import { images } from '../assets/images';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img
            src={images.notFound.src}
            alt={images.notFound.alt}
            title={images.notFound.title}
          />

          <h3>{txt.title}</h3>
          <p>{txt.description}</p>
          <Link to='/dashboard'>back to dashboard</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
