import React from 'react';
import Wrapper from '../styledComponents/Logo';

const Logo = ({ section }) => {
  return (
    <Wrapper>
      <div className={`logo ${section}`}>
        <div className='logo-icon'>
          {/* svg source: visualpharm - https://visualpharm.com/assets/940/Find%20Matching%20Job-595b40b85ba036ed117dc10b.svg */}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
            <path
              fill='currentColor'
              d='M 6.5 1 C 5.6774686 1 5 1.6774686 5 2.5 L 5 3 L 2.5 3 C 1.673 3 1 3.673 1 4.5 L 1 12.5 C 1 13.327 1.673 14 2.5 14 L 8.8789062 14 L 9.8789062 13 L 2.5 13 C 2.225 13 2 12.776 2 12.5 L 2 10 L 10.351562 10 C 10.530563 9.627 10.765594 9.286 11.058594 9 L 2 9 L 2 4.5 C 2 4.224 2.225 4 2.5 4 L 13.5 4 C 13.775 4 14 4.224 14 4.5 L 14 8.0507812 C 14.354 8.1017813 14.689 8.2025625 15 8.3515625 L 15 4.5 C 15 3.673 14.327 3 13.5 3 L 11 3 L 11 2.5 C 11 1.6774686 10.322531 1 9.5 1 L 6.5 1 z M 6.5 2 L 9.5 2 C 9.7814686 2 10 2.2185314 10 2.5 L 10 3 L 6 3 L 6 2.5 C 6 2.2185314 6.2185314 2 6.5 2 z M 7 7 L 7 8 L 9 8 L 9 7 L 7 7 z M 13.5 9 C 12.12521 9 11 10.12521 11 11.5 C 11 12.007772 11.155094 12.479439 11.417969 12.875 L 9.0214844 15.271484 L 9.7285156 15.978516 L 12.125 13.582031 C 12.520561 13.844906 12.992228 14 13.5 14 C 14.87479 14 16 12.87479 16 11.5 C 16 10.12521 14.87479 9 13.5 9 z M 13.5 10 C 14.334349 10 15 10.665651 15 11.5 C 15 12.334349 14.334349 13 13.5 13 C 12.665651 13 12 12.334349 12 11.5 C 12 10.665651 12.665651 10 13.5 10 z'
            />
          </svg>
        </div>
        <span className='logo-txt'>Hunting Buddy</span>
      </div>
    </Wrapper>
  );
};

export default Logo;
