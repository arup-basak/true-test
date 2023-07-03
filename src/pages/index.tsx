import React from 'react'
import Head from 'next/head'
import { Glass_Antiqua, Figtree } from 'next/font/google'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const glass_antiqua = Glass_Antiqua({
  weight: '400',
  subsets: ['latin'],
})
const figtree = Figtree({
  weight: '300',
  subsets: ['latin'],
})

const Home = () => {
  const { push } = useRouter()
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='h-screen '>
        <div className='bg-black text-[#F2CC8F] pt-10 flex flex-col items-center'>
          <div className='flex w-10/12'>
            <div className='m-auto w-full bg-[#F2CC8F] h-[1px] mobile:hidden tablet:block'></div>
            <div className={
              `${figtree.className} py-4 mx-2 mobile:w-full tablet:w-fit whitespace-nowrap text-center text-sm font-bold bg-black mobile:border-y-[1px] tablet:border-none border-[#F2CC8F]`
            }>
              True Test Diagnostics
            </div>
            <div className='m-auto w-full bg-[#F2CC8F] h-[1px] mobile:hidden tablet:block'></div>
          </div>

          <div className={`mobile:text-3xl tablet:text-7xl my-5 py-2 w-fit text ${glass_antiqua.className}`}>
            Revolutionize Your Health
          </div>
          <div className='mobile:text-base my-5 tablet:text-xl py-5 text-center mobile:w-3/4 tablet:w-2/5'>
            Welcome to TrueTest, the most advanced blood diagnostic center. Our cutting-edge technology and experienced experts are here to provide you with precise, reliable and life-enhancing results.
          </div>
          <div>
          </div>
          <div className='mobile:w-5/6 tablet:w-fit my-5 py-5 grid mobile:grid-cols-1 tablet:grid-cols-2 gap-2'>
            <motion.button
              whileHover={{
                scale: 1.2
              }}
              whileTap={{
                scale: 0.9
              }}
              className='bg-[#81b29a] text-black rounded-full py-2 px-4'
              onClick={() => {push('/report')}}>Download Report</motion.button>
            <motion.button
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.9
              }}
              className='bg-white text-black rounded-full py-2 px-4 w-full'
              onClick={() => {push('tel:+919732919663')}} >Call Now</motion.button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home