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
        props.animation ? { scale: 1.1 } : {}
      }
      whileTap={
        props.animation ? { scale: 0.95 } : {}
      }
      className={`bg-[#32db89] text-white rounded-md hover:bg-[#54da99] p-2 ${props.className}`}
      onClick={() => props.onClick()}>
      {props.innerText}
    </motion.button>
  )
}

export default Button