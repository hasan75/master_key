import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
  }, []);
  return { products, setProducts };
};

export default useProducts;
