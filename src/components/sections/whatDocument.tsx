import React from 'react'
import ServiceButtons from '../serviceButtons'
import businessLetter from '/src/assets/business-letter.svg'

type Props = {}

const WhatDocument = (props: Props) => {
  return (
    <div className='flex'>
      <div className='flex flex-col p-20 gap-3 bg-secondary text-white w-3/5'>
        <div className='flex flex-col gap-3 text-2xl'>
          <h4 className='text-gray-font'>Help the team get better</h4>
          <h2 className='font-cerebri font-extrabold mt-5 text-6xl w-[600px] leading-snug'>What document would you like to write?</h2>
          <h4 className='text-gray-font'>Just enter your text in the prompt and start in seconds...</h4>
        </div>
        <ul className='flex flex-col gap-10 h-52 mt-12 overflow-hidden'>
          <ServiceButtons title='Write letter' />
          <ServiceButtons title='Code snippets' />
          <ServiceButtons title='Blog posts' />
          <ServiceButtons title='Product descriptions' />
        </ul>
      </div>
      <div className='p-20 bg-primary w-full flex flex-col gap-24'>
        <div className='flex flex-col w-[400px] gap-10'>
          <img src={businessLetter} width={120} height={120} />
          <div className='flex flex-col gap-6'>
            <h3 className='text-3xl font-bold'>Write Quick Accurate Business Letters</h3>
            <h4 className='text-xl font-semibold text-dark'>With docuhelp.ai users can write detailed formal letters with 100% accuracy</h4>
          </div>
        </div>
        <button className='bg-btn-primary border-2 border-secondary text-secondary px-12 py-5 font-bold rounded-lg w-fit'>Start Writing</button>
      </div>
    </div>
  )
}

export default WhatDocument
