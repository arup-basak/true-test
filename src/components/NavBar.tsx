import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className='grid grid-cols-4 bg-fuchsia-300'>
            <Link href="/">
                <h1 className='text-2xl p-3'>True Test</h1>
            </Link>
            <div className='flex justify-between w-4/5'>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
                <div>Link 4</div>
            </div>
            <Link href="tel:+919732919663">
                <button className='p-2 px-4 bg-purple-300 rounded w-fit'>Call Now</button>
            </Link>
            <Link href="/cart">
                <button className='p-2 px-4 bg-purple-300 rounded w-fit'>Cart</button>
            </Link>
        </div>
    )
}

export default NavBar