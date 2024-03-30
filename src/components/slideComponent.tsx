import React from 'react'

type Props = {
  image: string
  title: string
  subtitle: string
}

const SlideComponent = ({ image, title, subtitle }: Props) => {
  return (
    <div className=' flex flex-col mb-48 gap-24'>
      <div className='flex flex-col w-[400px] gap-12'>
        <img src={image} width={120} height={120} />
        <div className='flex flex-col gap-6'>
          <h3 className='text-3xl font-bold capitalize'>{title}</h3>
          <h4 className='text-xl font-semibold text-dark'>{subtitle}</h4>
        </div>
      </div>
      <button className='bg-btn-primary border-2 border-secondary text-secondary px-12 py-5 font-bold rounded-lg w-fit'>Start Writing</button>
    </div>
  )
}

export default SlideComponent
