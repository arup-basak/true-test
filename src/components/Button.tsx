import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  innerText: string,
  onClick: () => void,
  className?: string,
  animation?: false | true
}

const Button = (props: ButtonProps) => {
  return (
    <motion.button
      whileHover={
        props.animation ? { scale: 1.05 } : {}
      }
      whileTap={
        props.animation ? { scale: 0.95 } : {}
      }
      className={`bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2 ${props.className}`}
      onClick={() => props.onClick()}>
      {props.innerText}
    </motion.button>
  )
}

export default Button