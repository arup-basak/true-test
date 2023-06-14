import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className='grid grid-cols-4'>
            <Link href="/">
                <h1 className='text-2xl'>True Test</h1>
            </Link>
            <div className='flex justify-between w-4/5'>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
                <div>Link 4</div>
            </div>
            <button className='p-2 px-4 bg-purple-300 rounded w-fit'>Call Now</button>
            <Link href="/cart">
                <button className='p-2 px-4 bg-purple-300 rounded w-fit'>Cart</button>
            </Link>
        </div>
    )
}

export default NavBar