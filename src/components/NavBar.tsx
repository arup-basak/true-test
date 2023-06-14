import React from 'react'

const NavBar = () => {
    return (
        <div className='grid grid-cols-3'>
            <h1>True Test</h1>
            <div className='flex justify-between w-4/5'>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
                <div>Link 4</div>
            </div>
            <button className='p-2 px-4 bg-purple-300 rounded w-fit'>Call Now</button>
        </div>
    )
}

export default NavBar