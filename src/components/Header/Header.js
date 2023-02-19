import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import musicLogo from '../../assests/images/logo.png';
import home from '../../assests/images/HomeSVG.svg';
import cart from '../../assests/images/Cart.svg';
import contact from '../../assests/images/Contact.svg';
import explore from '../../assests/images/Explore.svg';
import history from '../../assests/images/History.svg';
import setting from '../../assests/images/Setting.svg';
import selling from '../../assests/images/Selling.svg';
import profile from '../../assests/images/Profile.svg';
import saved from '../../assests/images/Saved.svg';

import frame from '../../assests/images/Frame 2.png';

const Header = () => {
  const menulist = [
    {
      title: 'Home',
      path: '/',
      cName: 'navLinks',
      logo: home,
    },
    {
      title: 'Explore',
      path: '/',
      cName: 'navLinks',
      logo: explore,
    },
    {
      title: 'Saved',
      path: '/',
      cName: 'navLinks',
      logo: saved,
    },
    {
      title: 'Cart',
      path: '/',
      cName: 'navLinks',
      logo: cart,
    },
    {
      title: 'Selling',
      path: '/',
      cName: 'navLinks',
      logo: selling,
    },
    {
      title: 'Profile',
      path: '/',
      cName: 'navLinks',
      logo: profile,
    },
    {
      title: 'History',
      path: '/',
      cName: 'navLinks',
      logo: history,
    },
    {
      title: 'Contact us',
      path: '/contact',
      cName: 'navLinks',
      logo: contact,
    },
    {
      title: 'Setting',
      path: '/',
      cName: 'navLinks',
      logo: setting,
    },
  ];
  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clip-rule='evenodd'
            fill-rule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 asideBar'
        aria-label='Sidebar'
      >
        <div className='h-full pl-7 pr-3 py-4 overflow-y-auto bg-white '>
          <Link to='/'>
            <div className='flex items-center pb-2 mt-4'>
              <img className='logoImg' src={musicLogo} alt='' />
              <span className='pl-4 text-28px'>MK Sounds</span>
            </div>
          </Link>
          <ul className='space-y-4 pt-8'>
            {menulist.map((menu) => (
              <li key={menu?.title}>
                <Link to={menu.path}>
                  <a
                    href='#'
                    className='flex items-center px-2 py-3 text-base font-normal  rounded-lg  '
                  >
                    <img src={menu?.logo} alt='' />
                    <span className='pl-8 font-medium text-xl'>
                      {menu?.title}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className='pt-12'>
            <Link to='/'>
              <img src={frame} alt='Contact for Help' />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
