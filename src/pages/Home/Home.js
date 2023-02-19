import React from 'react';
import useDataContexts from '../../hooks/useDataContexts';
import search from '../../assests/images/HomePageIcons/search.svg';
import options from '../../assests/images/HomePageIcons/menu.svg';
import message from '../../assests/images/HomePageIcons/message.svg';
import notifications from '../../assests/images/HomePageIcons/notifications.svg';
import profile from '../../assests/images/HomePageIcons/profile.svg';

import './Home.css';

const Home = () => {
  const { products } = useDataContexts();

  return (
    <section className='mr-4'>
      <div className='CategorySection mt-5 flex items-center justify-between'>
        <div className='flex-col justify-center '>
          <h4 className='text-4xl font-semibold'>Headphone</h4>
          <p className='font-semibold text-lg pl-5'>For the top brand</p>
        </div>
        <div className='flex items-center'>
          {/* search bar  */}
          <div class='relative'>
            <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <img src={search} alt='search icon' />
            </div>
            <input
              type='search'
              id='default-search'
              class='searchBar block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-white'
              placeholder='Search Product'
              required
            />
            <div class='absolute right-2.5 bottom-2.5 '>
              <img src={options} alt='' />
            </div>
          </div>
          <div className='otherIcons flex align-center pl-3 pr-3'>
            <div className='iconHolder '>
              <img src={message} alt='message' />
            </div>
            <div className='iconHolder'>
              <img src={notifications} alt='message' />
            </div>
            <div className='iconHolder'>
              <img src={profile} alt='message' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
