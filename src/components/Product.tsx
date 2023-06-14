import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import { ProductProps } from '@/libs/interface'

const Product = (props: ProductProps) => {
  const addToCart = (productId: string) => {
    let cartData: string[] = JSON.parse(localStorage.getItem('true-test-cart') || '[]');
    cartData.push(productId);
    localStorage.setItem('true-test-cart', JSON.stringify(cartData));
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      className='bg-red-200 p-3 rounded shadow'>
      <h1>{props.heading}</h1>
      <h2>{`₹${props.price}`}</h2>
      <div className='grid grid-cols-2 gap-2 p-2'>
        <Button innerText='View Details' onClick={() => { }} />
        <Button innerText='Add To Cart' onClick={() => { 
          addToCart(props.productId)
         }} />
      </div>
    </motion.div>
  )
}

export default Product