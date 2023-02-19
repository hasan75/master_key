import React from 'react';
import useDataContexts from '../../hooks/useDataContexts';

const Home = () => {
  const { products } = useDataContexts();

  return (
    <div>
      <h2 className='text-center text-4xl'>This is Home</h2>
    </div>
  );
};

export default Home;
