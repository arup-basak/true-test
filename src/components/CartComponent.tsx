import { ProductProps } from '@/libs/interface'
import React from 'react'

const CartComponent = (props: ProductProps) => {
    return (
        <div className='bg-blue-200 p-2 rounded m-2'>
            <div className=''>{props.heading}</div>
            <div className=''>{props.price}</div>
        </div>
    )
}

export default CartComponent