import React from 'react'

interface Props {
    label: string
}

const DateTimePicker = (props: Props) => {
  return (
    <div className='flex flex-col'>
        <span className='p-2'>{props.label}</span>
        <input type='datetime-local'  className='border p-2'/>
    </div>
  )
}

export default DateTimePicker