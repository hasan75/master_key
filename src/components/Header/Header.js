import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/'>
        <a href=''>Home</a>
      </Link>
    </div>
  );
};

export default Header;
