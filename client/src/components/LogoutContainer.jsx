import React, { useState } from 'react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

import Wrapper from '../styledComponents/LogoutContainer';
import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar && !imageFailed ? (
          <>
            {!imageLoaded && <FaUserCircle />}
            <img
              src={user.avatar}
              alt='avatar'
              className='img'
              style={{ display: imageLoaded ? 'inline-block' : 'none' }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageFailed(true)}
            />
          </>
        ) : (
          <FaUserCircle />
        )}
        {user?.name}
        <FaCaretDown />
      </button>

      <div className={`dropdown ${showLogout && 'show-dropdown'}`}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
