import React from 'react'
import {motion} from 'framer-motion'
import Button from './Button'
import { ProductProps } from '@/libs/interface'

const Product = (props: ProductProps) => {
  return (
    <motion.div
        className='bg-red-200 p-3 rounded'>
        <h1>{props.heading}</h1>
        <h2>{`₹${props.price}`}</h2>
        <div className='grid grid-cols-2 gap-2 p-2'>
            <Button innerText='View Details' onClick={() => {}}/>
            <Button innerText='Add To Cart' onClick={() => {}}/>
        </div>
    </motion.div>
  )
}

export default Product