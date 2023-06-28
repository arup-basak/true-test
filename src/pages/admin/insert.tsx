import React from 'react'
import Head from 'next/head'
import Input from '@/components/Input'
import Button from '@/components/Button'
import DateTimePicker from '@/components/DateTimePicker'

const Add = () => {
  return (
    <>
      <Head>
        <title>New Report</title>
      </Head>
      <main className='m-auto'>
        <div className='grid grid-cols-2 gap-12'>
          <div>
            <Input label='Name' />
            <Input label='Age' maxLen={2} type='number' />
            <Input label='Gender' maxLen={1} />
            <Input label='Address' />
          </div>

          <div>
            <DateTimePicker label='Sample Collection Time'/>
            <DateTimePicker label='Received DATE/TIME'/>
            <DateTimePicker label='Approved DATE/TIME'/>
          </div>
        </div>

        <div>
          <Button
            innerText='Save as Draft'
            className='m-2'
            onClick={() => { }}
            animation={true}
          />
          <Button
            innerText='Save Data'
            className='m-2'
            animation={true}
            onClick={() => { }} />
        </div>
      </main>
    </>
  )
}

export default Add