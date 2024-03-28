import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='bg-gray-300 relative border-b-[1px] pt-[84px] border-secondary'>
      <img src='./src/assets/Herolines.png' className='bg-primary h-[75vh] w-screen object-cover pt-40' />
      <div className='absolute flex flex-col top-10 right-0 bottom-0 left-0 items-center w-1/2 mx-auto text-center gap-6 justify-center'>
        <h1 className='uppercase bg-transparent font-[1000] font-cerebri leading-[80px] text-[68px]'>Docuhelp <span className='text-tertiary'>writes</span> business documents.</h1>
        <h3 className='text-xl text-dark w-5/6'>We are a software company that help businesses build fast business documents that can help the business reach it goals.</h3>
        <div className='mt-6'>
          <button className='bg-secondary text-primary px-10 py-4 font-bold text-lg rounded-lg border-2 border-secondary'>Get started</button>
          <button className='bg-btn-primary border-2 border-secondary text-lg text-secondary px-12 py-4 font-bold rounded-lg ml-8'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
