import React, { createContext, useState } from 'react';
import useData from '../hooks/useData';

export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  /*
     *** hooks will be imported here like:
     const {members} = useMembers();
     then members will be in data.
    */
  const { appData } = useData();

  const data = {
    appData,
  };

  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
