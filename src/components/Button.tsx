import React from 'react'

interface ButtonProps {
    innerText: string,
    onClick: () => void,
    className?: string
}

const Button = (props: ButtonProps) => {
  return (
    <button 
        className={`cursor-pointer transition border border-blue-500 hover:bg-blue-500 hover:text-white p-2 ${props.className}`}
        onClick={() => props.onClick()}>
        {props.innerText}
    </button>
  )
}

export default Button