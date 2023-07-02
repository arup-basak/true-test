import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface RadioGroupProps {
  values: string[],
  onChange: (id: number) => void
  activeValue?: number
}

const RadioGroup = (props: RadioGroupProps) => {
  const [active, setActive] = useState(props.activeValue || 0)

  const handleItemClick = (key: number) => {
    setActive(key)
    props.onChange(key)
  }

  return (
    <div className='flex'>
      {props.values.map((item, key) => (
        <motion.div
          key={key}
          onClick={() => handleItemClick(key)}
          className={`text-sm p-2 m-1 rounded cursor-pointer ${
            active === key ? 'bg-green-500 text-white' : 'hover:bg-slate-200'
          }`}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  )
}

export default RadioGroup
