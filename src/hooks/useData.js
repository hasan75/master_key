import { useState, useEffect } from 'react';

const useData = () => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    fetch('/dataFile.json')
      .then((res) => res.json())
      .then((data) => setAppData(data));
  }, []);
  return { appData, setAppData };
};

export default useData;
