import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='bg-gray-300 relative'>
      <img src='./src/assets/Herolines.png' className='bg-primary h-[70vh] w-screen object-cover pt-40' />
      <div className='absolute flex flex-col top-0 right-0 bottom-0 left-0 items-center w-1/2 mx-auto text-center justify-center'>
        <h1 className='uppercase bg-transparent font-extrabold font-cerebri text-6xl'>Docuhelp <span className='text-secondary'>writes</span> business documents.</h1>
        <h3 className='text-lg w-4/6'>We are a software company that help businesses build fast business documents that can help the business reach it goals.</h3>
        <div className='mt-6'>
          <button className='bg-secondary text-primary px-6 py-3.5 font-bold rounded-lg'>Get started</button>
          <button className='bg-primary border-2 border-secondary text-secondary px-8 py-3 font-bold rounded-lg ml-8'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
