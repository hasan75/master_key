import React, { createContext, useState } from 'react';
import useProducts from '../hooks/useProducts';

export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  /*
     *** hooks will be imported here like:
     const {members} = useMembers();
     then members will be in data.
    */
  const { products } = useProducts();

  const data = {
    products,
  };

  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
