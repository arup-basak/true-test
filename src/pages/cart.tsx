import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ProductProps } from '@/libs/interface';
import CartComponent from '@/components/CartComponent';

const Cart = () => {
  const [cartData, setCartData] = useState<ProductProps[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('true-test-cart');
    const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
    setCartData(parsedData);
  }, []);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className='m-auto w-3/5'>
        {cartData.map((product, index) => (
          <CartComponent
            key={index}
            heading={product.heading}
            price={product.price}
            productId={product.productId} />
        ))}
      </div>

    </>
  );
};

export default Cart;
