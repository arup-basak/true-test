import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { ProductProps } from '@/libs/interface';
import CartComponent from '@/components/CartComponent';
import TotalAmountScreen from '@/components/TotalAmountScreen';

const Cart = () => {
  const [cartData, setCartData] = useState<ProductProps[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const localStorageData = localStorage.getItem('true-test-cart');
    const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
    setCartData(parsedData);
  }, []);

  useEffect(() => {
    let calculatedTotalAmount = 0;
    cartData.forEach((product) => {
      calculatedTotalAmount += product.price;
    });
    setTotalAmount(calculatedTotalAmount);
  }, [cartData]);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className='grid grid-cols-[1fr_12rem] w-3/5 m-auto'>
        <div className=''>
          {cartData.map((product, index) => (
            <CartComponent
              key={index}
              heading={product.heading}
              price={product.price}
              productId={product.productId}
            />
          ))}
        </div>
        <TotalAmountScreen totalAmount={totalAmount} />
      </div>
    </>
  );
};

export default Cart;
