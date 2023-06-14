import React, { useEffect, useState } from 'react';
import Head from 'next/head';


const Cart = () => {
  const [cartData, setCartData] = useState<string[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('true-test-cart');
    const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
    setCartData(parsedData);
  }, []);

  if (cartData.length === 0)
    return <>No Data</>;

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      {
        cartData.map((productId, index) => <div key={index}>{productId}</div>)
      }
    </>
  );
}

export default Cart;
