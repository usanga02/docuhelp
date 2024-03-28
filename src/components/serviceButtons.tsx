import React from 'react'
import image from "/src/assets/Switch.svg"

type Props = {
  title: string
}

const ServiceButtons = ({ title }: Props) => {
  return (
    <li className='py-4 px-10 w-fit flex text-lg font-bold bg-tertiary rounded-full items-center'><img className='mr-10 ' src={image} />{title}</li>
  )
}

export default ServiceButtons
