import React from 'react'
import Card from '../cards/card'

type Props = {}

const GetStarted = (props: Props) => {
  return (
    <Card className='m-20 border-tertiary border-opacity-5 flex'>
      <div className='flex flex-col w-1/2 gap-5'>
        <h3 className='font-cerebri-light w-1/2 text-5xl'>Get Started for free</h3>
        <h5 className='text-dark text-lg w-[445px]'>Transforming Blank Pages into Captivating Narratives
          DocuHelp AI empowers businesses to discover their distinctive storytelling style</h5>
        <div className='mt-6'>
          <button className='bg-secondary text-primary px-8 py-3.5 font-bold rounded-lg'>Get started</button>
          <button className='bg-btn-primary border-2 border-secondary text-secondary px-10 py-3 font-bold rounded-lg ml-8'>Sign in</button>
        </div>
      </div>
      <div className='mt-14 ml-20'>
        <ul className='single-marker flex flex-col gap-5'>
          <li className='font-semibold text-lg text-dark'>Try Docuhelp Now!</li>
          <li>
            <ul className='text-lg flex flex-col gap-4 custom-marker'>
              <li>No credit card required</li>
              <li>Unlimited access</li>
            </ul>
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default GetStarted
