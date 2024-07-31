import React from 'react';

// add job
import { IoMdAdd } from 'react-icons/io';
// import { AiOutlinePlus } from 'react-icons/ai';
// import { FiPlus } from 'react-icons/fi';
import { VscNewFile } from 'react-icons/vsc';
// import { AiOutlinePlusSquare } from 'react-icons/ai';
// import { FaPlus } from 'react-icons/fa';

// all jobs
import { RiListCheck } from 'react-icons/ri';

// stats
import { IoBarChartSharp } from 'react-icons/io5';

//profile
import { FaUser } from 'react-icons/fa';
// import { FaRegUser } from 'react-icons/fa';
// import { ImProfile } from 'react-icons/im';

//admin
import { MdAdminPanelSettings } from 'react-icons/md';

const navLinks = [
  {
    id: 0,
    label: 'add job',
    className: 'add-job-icon',
    path: '.',
    icon: <VscNewFile />,
    iconSource:
      'react-icons v4.8.0 - https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 1,
    label: 'all jobs',
    path: 'all-jobs',
    className: 'all-jobs-icon',
    icon: <RiListCheck />,
    iconSource:
      'react-icons v4.8.0 - https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 2,
    label: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp />,
    className: 'stats-icon',
    iconSource:
      'react-icons v4.8.0 - https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 3,
    label: 'profile',
    path: 'profile',
    icon: <FaUser />,
    className: 'profile-icon',
    iconSource:
      'react-icons v4.8.0 - https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
  {
    id: 4,
    label: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
    className: 'admin-icon',
    iconSource:
      'react-icons v4.8.0 - https://react-icons.github.io/react-icons/, license: https://github.com/react-icons/react-icons/blob/master/LICENSE',
  },
];

export default navLinks;
