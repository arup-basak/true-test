import React from 'react'
import Head from 'next/head'
import Input from '@/components/Input'

const Add = () => {
  return (
    <>
      <Head>
        <title>New Report</title>
      </Head>
      <main>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </main>
    </>
  )
}

export default Add