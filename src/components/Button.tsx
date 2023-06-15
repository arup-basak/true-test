import React from 'react'

interface ButtonProps {
    innerText: string,
    onClick: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button 
        className='cursor-pointer transition border border-blue-500 hover:bg-blue-500 hover:text-white rounded-sm p-2'
        onClick={() => props.onClick()}>
        {props.innerText}
    </button>
  )
}

export default Button